# init.ps1 - Windows verification entrypoint for this harness.
#
# Mirrors ./init.sh for environments where bash is unavailable, WSL-mapped, or
# awkward to invoke. Both scripts run the same checks; keep them in sync.
# Fails fast: any failing check aborts with a non-zero exit code.

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

function Invoke-Checked {
    param([string]$Label, [scriptblock]$Command)
    Write-Host "=== $Label ==="
    & $Command
    if ($LASTEXITCODE -ne 0) {
        throw "Check failed ($Label) with exit code $LASTEXITCODE"
    }
}

function Resolve-PackageManagerCommand {
    param([string]$Name)
    # Prefer the .cmd/.exe shims over PowerShell's .ps1 shims: the .ps1 shims
    # read $LASTEXITCODE before any native command has set it, and that read
    # becomes a fatal error while $ErrorActionPreference is 'Stop'.
    foreach ($candidate in @("$Name.cmd", "$Name.exe", $Name)) {
        $found = Get-Command $candidate -ErrorAction SilentlyContinue
        if ($found) { return $found.Source }
    }
    return $Name
}

function Test-PackageScript {
    param([string]$Name)
    if (-not (Test-Path 'package.json')) { return $false }
    $manifest = Get-Content 'package.json' -Raw | ConvertFrom-Json
    if (-not $manifest.scripts) { return $false }
    return ($manifest.scripts.PSObject.Properties.Name -contains $Name)
}

Write-Host '=== Harness Initialization ==='

if (Test-Path 'package.json') {
    $pmName = if (Test-Path 'pnpm-lock.yaml') { 'pnpm' }
              elseif (Test-Path 'yarn.lock') { 'yarn' }
              elseif ((Test-Path 'bun.lock') -or (Test-Path 'bun.lockb')) { 'bun' }
              else { 'npm' }
    $pm = Resolve-PackageManagerCommand $pmName

    Invoke-Checked -Label "Installing dependencies with $pmName" -Command { & $pm install }

    foreach ($script in @('check', 'typecheck', 'type-check', 'lint', 'test', 'build')) {
        if (Test-PackageScript $script) {
            Invoke-Checked -Label "Running $pmName $script" -Command {
                if ($script -eq 'test') { & $pm test } else { & $pm run $script }
            }
        }
    }
}
elseif ((Test-Path 'pyproject.toml') -or (Test-Path 'requirements.txt')) {
    $py = (Get-Command python3 -ErrorAction SilentlyContinue).Source
    if (-not $py) { $py = (Get-Command python -ErrorAction SilentlyContinue).Source }
    if (-not $py) { throw 'No python3 or python interpreter found.' }

    Write-Host '=== Running Python verification ==='
    # pytest exits 5 when it collects zero tests - not a failure for a fresh project.
    & $py -m pytest
    if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne 5) {
        throw "pytest failed with exit code $LASTEXITCODE"
    }
    # -x skips virtualenvs/build dirs so the syntax check doesn't compile dependencies.
    Invoke-Checked -Label 'Compiling Python sources' -Command {
        & $py -m compileall -q -x '(^|/)(\.?venv|env|node_modules|build|dist|__pycache__)(/|$)' .
    }
}
elseif (Test-Path 'go.mod') {
    Invoke-Checked -Label 'Running Go verification' -Command { go test ./... }
}
elseif (Test-Path 'Cargo.toml') {
    Invoke-Checked -Label 'Running Rust verification' -Command { cargo test }
}
elseif (Test-Path 'pom.xml') {
    Invoke-Checked -Label 'Running Maven verification' -Command { mvn test }
}
elseif ((Test-Path 'build.gradle') -or (Test-Path 'build.gradle.kts')) {
    Invoke-Checked -Label 'Running Gradle verification' -Command { ./gradlew test }
}
elseif ((Get-ChildItem -Filter *.csproj -ErrorAction SilentlyContinue) -or
         (Get-ChildItem -Filter *.sln -ErrorAction SilentlyContinue)) {
    Invoke-Checked -Label 'Running .NET verification' -Command { dotnet test }
}
else {
    Invoke-Checked -Label 'Running prototype checks' -Command { & node check.mjs }
    Invoke-Checked -Label 'Running render smoke test' -Command { & node smoke.mjs }
}

Write-Host '=== Verification Complete ==='
Write-Host ''
Write-Host 'Next steps:'
Write-Host '1. Read feature_list.json to see current feature state'
Write-Host '2. Pick ONE unfinished feature to work on'
Write-Host '3. Implement only that feature'
Write-Host '4. Re-run verification before claiming done'
