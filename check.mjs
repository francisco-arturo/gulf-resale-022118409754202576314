#!/usr/bin/env node
/**
 * Static verification for the Thanya prototype.
 * No dependencies: parses the shipped files, checks the demo contract,
 * and fails loudly when a required path or interaction disappears.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const failures = [];
const passes = [];

function check(label, condition, detail = '') {
  if (condition) {
    passes.push(`${label}${detail ? ` (${detail})` : ''}`);
  } else {
    failures.push(`${label}${detail ? ` (${detail})` : ''}`);
  }
}

function read(name) {
  const file = join(root, name);
  check(`${name} exists`, existsSync(file));
  return existsSync(file) ? readFileSync(file, 'utf8') : '';
}

const html = read('index.html');
const css = read('styles.css');
const js = read('app.js');
const server = read('dev-server.mjs');

check('HTML is English and declares its language', html.includes('<html lang="en">'));
check('HTML has a responsive viewport', html.includes('name="viewport"'));
check('HTML loads the stylesheet', html.includes('href="styles.css"'));
check('HTML loads the app', html.includes('src="app.js"'));
check('HTML exposes the route outlet', html.includes('id="view"'));
check('HTML exposes the modal outlet', html.includes('id="modal-root"'));
check('HTML includes the mobile tab bar', html.includes('class="mobile-tabs"'));
check('HTML has no placeholder copy', !/\[\[.+\]\]/.test(html));

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
check('HTML ids are unique', duplicateIds.length === 0, duplicateIds.join(', '));

let parsed = true;
try {
  // Compile only. The module touches the DOM when the browser runs it.
  new Function(js);
} catch (error) {
  parsed = false;
  failures.push(`app.js parses (${error.message})`);
}
if (parsed) passes.push('app.js parses as JavaScript');

check('App defines the seeded market', js.includes('const SEED = [') && js.includes("id: 'chair'"));
check('App supports search and filters', js.includes('function filteredListings()') && js.includes('state.category'));
check('App has an item detail route', js.includes("route === 'item'") && js.includes('function renderItem'));
check('App has escrow checkout', js.includes('function openCheckout') && js.includes('data-pay'));
check('Checkout creates an escrow order', js.includes('function createOrder') && js.includes("status: 'held'"));
check('Orders expose the delivery release step', js.includes('data-confirm-order') && js.includes('function confirmOrder'));
check('Seller flow publishes a listing', js.includes('function publishListing') && js.includes('sell-form'));
check('Ops console handles verification', js.includes('function renderOps') && js.includes('data-approve'));
check('Escrow timeline is present', js.includes('Payment held in escrow'));
check('The demo avoids an auth gate', !/sign[ -]?in|log[ -]?in|password/i.test(html));
check('The demo is light-mode only', !css.includes('prefers-color-scheme'));
check('The demo has a small-screen layout', css.includes('@media (max-width: 720px)') && css.includes('.mobile-tabs'));
check('Every icon has intrinsic sizing', /svg\s*\{[^}]*flex:\s*0 0 auto/.test(css));
check('The local server is excluded from deployment', read('.vercelignore').includes('dev-server.mjs'));
check('The local server binds to loopback', server.includes("'127.0.0.1'"));
check('The demo has no Arabic UI copy', !/[\u0600-\u06ff]/.test(html + js + css));
check('No TODO markers remain', !/\b(TODO|FIXME)\b/.test(html + js + css));

const externalImages = [...js.matchAll(/https:\/\/images\.unsplash\.com\/[^"'`\s]+/g)];
check('Product photography uses HTTPS', externalImages.length > 0 && externalImages.every((match) => match[0].startsWith('https://')));
check('Each seeded listing has a price and city', (js.match(/price: \d+/g) || []).length >= 9 && (js.match(/city: '/g) || []).length >= 9);

if (failures.length) {
  console.error('\nFAIL');
  for (const failure of failures) console.error(`  x ${failure}`);
  console.error(`\n${passes.length} checks passed, ${failures.length} failed.`);
  process.exit(1);
}

console.log('PASS');
for (const pass of passes) console.log(`  + ${pass}`);
console.log(`\n${passes.length} checks passed, 0 failed.`);
