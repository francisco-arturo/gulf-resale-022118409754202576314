/* Thanya — seeded demo marketplace. No backend, no auth, no real payments. */

const IMG = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const SEED = [
  {
    id: 'chair',
    title: 'Teak lounge chair, 1960s',
    category: 'Furniture',
    price: 1250,
    city: 'Riyadh',
    condition: 'Excellent',
    seller: { name: 'Omar K.', initials: 'OK', rating: 4.9, sales: 34, since: 2023 },
    posted: '2 days ago',
    image: IMG('1567538096630-e0c55bd6374c'),
    alt: 'Teak lounge chair with warm upholstery in a sunlit room',
    description:
      'Solid teak frame with original wool upholstery. One owner, smoke-free home. Minor patina on the armrests, no structural repairs. A quiet statement piece that has plenty of life left.',
    tags: ['teak', 'lounge', 'mid century', 'seating'],
    featured: true
  },
  {
    id: 'headphones',
    title: 'Sony WH-1000XM4 headphones',
    category: 'Electronics',
    price: 780,
    city: 'Jeddah',
    condition: 'Like new',
    seller: { name: 'Hessa A.', initials: 'HA', rating: 5.0, sales: 18, since: 2024 },
    posted: '5 hours ago',
    image: IMG('1505740420928-5e560c06d30e'),
    alt: 'Black over-ear headphones on a pale background',
    description:
      'Bought last year and used on two flights. Case, cable and original receipt included. Noise cancelling and battery are both working exactly as they should.',
    tags: ['sony', 'headphones', 'audio', 'noise cancelling'],
    featured: false
  },
  {
    id: 'camera',
    title: 'Canon AE-1 with 50mm lens',
    category: 'Electronics',
    price: 950,
    city: 'Dubai',
    condition: 'Good',
    seller: { name: 'Rashid M.', initials: 'RM', rating: 4.8, sales: 27, since: 2022 },
    posted: '1 day ago',
    image: IMG('1526170375885-4d8ecf77b99f'),
    alt: 'Vintage film camera with a prime lens',
    description:
      'Fully working film camera with the 50mm f/1.8 lens. Light meter tested, new light seals fitted last year, strap included. A few honest marks on the body from real use.',
    tags: ['canon', 'film', 'camera', 'photography', 'vintage'],
    featured: false
  },
  {
    id: 'watch',
    title: 'Tissot PRX automatic, 40mm',
    category: 'Watches',
    price: 1650,
    city: 'Doha',
    condition: 'Excellent',
    seller: { name: 'Noor H.', initials: 'NH', rating: 4.9, sales: 41, since: 2021 },
    posted: '3 days ago',
    image: IMG('1523275335684-37898b6baf30'),
    alt: 'Steel automatic watch on a dark surface',
    description:
      'Worn twice, box and papers included. Sized for a 17cm wrist with spare links in the box. Keeps good time and has no desk-diving marks on the clasp.',
    tags: ['tissot', 'watch', 'automatic', 'steel'],
    featured: false
  },
  {
    id: 'bike',
    title: 'Specialized Allez road bike, 54cm',
    category: 'Sports',
    price: 2400,
    city: 'Riyadh',
    condition: 'Good',
    seller: { name: 'Faisal S.', initials: 'FS', rating: 4.7, sales: 12, since: 2024 },
    posted: '6 days ago',
    image: IMG('1485965120184-e220f721d03e'),
    alt: 'Road bicycle leaning against a wall',
    description:
      'Shimano Tiagra groupset, recently serviced with new bar tape and chain. Two small paint chips on the top tube, photographed honestly. Ideal for a first serious road bike.',
    tags: ['specialized', 'bike', 'cycling', 'road bike', '54cm'],
    featured: false
  },
  {
    id: 'sneakers',
    title: 'Nike Air Max 90, UK 9',
    category: 'Fashion',
    price: 320,
    city: 'Kuwait City',
    condition: 'Good',
    seller: { name: 'Dana K.', initials: 'DK', rating: 4.9, sales: 23, since: 2023 },
    posted: '8 hours ago',
    image: IMG('1542291026-7eec264c27ff'),
    alt: 'Pair of red and white trainers',
    description:
      'Worn a handful of times indoors, soles clean. No box, no swaps. True to size and ready for a new rotation. Happy to send extra photos before you buy.',
    tags: ['nike', 'air max', 'sneakers', 'uk 9'],
    featured: false
  },
  {
    id: 'phone',
    title: 'iPhone 13 Pro, 256GB',
    category: 'Electronics',
    price: 2150,
    city: 'Riyadh',
    condition: 'Excellent',
    seller: { name: 'Yousef A.', initials: 'YA', rating: 4.8, sales: 19, since: 2023 },
    posted: '12 hours ago',
    image: IMG('1511707171634-5f897ff02aa9'),
    alt: 'Smartphone held in one hand',
    description:
      'Graphite, 256GB, battery health 89%. Box and cable included. A tempered glass protector has been fitted since day one and the screen has no cracks or deep scratches.',
    tags: ['iphone', 'apple', 'phone', '256gb'],
    featured: false
  },
  {
    id: 'espresso',
    title: 'Breville Barista Express',
    category: 'Home',
    price: 1100,
    city: 'Manama',
    condition: 'Like new',
    seller: { name: 'Mariam B.', initials: 'MB', rating: 5.0, sales: 9, since: 2024 },
    posted: '2 days ago',
    image: IMG('1517668808822-9ebb02f2a0e6'),
    alt: 'Espresso machine and coffee on a kitchen counter',
    description:
      'Descaled monthly and used gently at home. Comes with the portafilter, tamper, milk jug and both filter baskets. Small mark on the drip tray, shown in the photos.',
    tags: ['breville', 'espresso', 'coffee', 'kitchen'],
    featured: false
  },
  {
    id: 'rug',
    title: 'Hand-knotted wool rug, 2 x 3 m',
    category: 'Home',
    price: 1800,
    city: 'Jeddah',
    condition: 'Excellent',
    seller: { name: 'Salma T.', initials: 'ST', rating: 4.9, sales: 31, since: 2022 },
    posted: '4 days ago',
    image: IMG('1616486338812-3dadae4b4ace'),
    alt: 'Warm living room with a large wool rug',
    description:
      'Cream and clay hand-knotted wool rug, professionally cleaned before listing. Fringe intact with no stains or holes. It was in a guest room and never saw heavy traffic.',
    tags: ['rug', 'wool', 'hand knotted', 'home'],
    featured: false
  }
];

const CATEGORIES = ['All', 'Furniture', 'Electronics', 'Fashion', 'Watches', 'Sports', 'Home'];
const CATEGORY_ICONS = {
  Furniture: 'box',
  Electronics: 'camera',
  Fashion: 'bag',
  Watches: 'spark',
  Sports: 'truck',
  Home: 'grid'
};
const DELIVERY = { standard: 25, express: 45 };

const state = {
  query: '',
  category: 'All',
  city: 'All GCC',
  sort: 'recommended',
  savedOnly: false,
  saved: new Set(['camera']),
  listings: SEED.map((item) => ({ ...item, seller: { ...item.seller } })),
  orders: [
    {
      id: 'TH-2481',
      listingId: 'headphones',
      status: 'transit',
      placed: 'Nov 1, 2026',
      total: 805,
      seller: 'Hessa A.',
      tracking: 'ARX-7281-4490',
      timeline: [
        { label: 'Order placed', detail: 'Nov 1, 9:12 AM', state: 'done' },
        { label: 'Payment held in escrow', detail: 'SAR 805 secured by Thanya', state: 'done' },
        { label: 'Seller shipped with Aramex', detail: 'Tracking ARX-7281-4490', state: 'done' },
        { label: 'Out for delivery', detail: 'Riyadh, Al Olaya', state: 'current' },
        { label: 'Delivered', detail: 'Confirm to release funds', state: 'todo' }
      ]
    },
    {
      id: 'TH-2310',
      listingId: 'camera',
      status: 'delivered',
      placed: 'Sep 18, 2026',
      total: 975,
      seller: 'Rashid M.',
      tracking: 'ARX-6114-8820',
      timeline: [
        { label: 'Order placed', detail: 'Sep 18, 4:40 PM', state: 'done' },
        { label: 'Payment held in escrow', detail: 'SAR 975 secured by Thanya', state: 'done' },
        { label: 'Seller shipped with Aramex', detail: 'Tracking ARX-6114-8820', state: 'done' },
        { label: 'Delivered', detail: 'Confirmed Sep 21. Funds released.', state: 'done' }
      ]
    },
    {
      id: 'TH-2107',
      listingId: 'chair',
      status: 'delivered',
      placed: 'Aug 2, 2026',
      total: 1275,
      seller: 'Omar K.',
      tracking: 'ARX-5540-2317',
      timeline: [
        { label: 'Order placed', detail: 'Aug 2, 11:05 AM', state: 'done' },
        { label: 'Payment held in escrow', detail: 'SAR 1,275 secured by Thanya', state: 'done' },
        { label: 'Seller shipped with Aramex', detail: 'Tracking ARX-5540-2317', state: 'done' },
        { label: 'Delivered', detail: 'Confirmed Aug 6. Funds released.', state: 'done' }
      ]
    }
  ],
  pendingSellers: [
    { id: 'sara', name: 'Sara M.', initials: 'SM', city: 'Jeddah', detail: 'National ID + phone · 2 listings' },
    { id: 'khalid', name: 'Khalid R.', initials: 'KR', city: 'Dammam', detail: 'National ID pending · 1 listing' },
    { id: 'noura', name: 'Noura A.', initials: 'NA', city: 'Dubai', detail: 'Passport + phone · 4 listings' }
  ],
  checkoutListing: null,
  checkoutDelivery: 'standard',
  checkoutPayment: 'mada',
  photoData: null,
  previousFocus: null
};

const view = document.getElementById('view');
const modalRoot = document.getElementById('modal-root');
const toastEl = document.getElementById('toast');
const globalSearch = document.getElementById('global-search');
const citySelect = document.getElementById('city-select');
let toastTimer = null;
let payTimer = null;

/* ---------- helpers ---------- */
function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function money(value) {
  return `SAR ${Number(value).toLocaleString('en-US')}`;
}

function icon(name, size = 18) {
  return `<svg width="${size}" height="${size}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function stars(count = 5) {
  return `<span class="stars" aria-hidden="true">${Array.from({ length: count }, () => icon('star', 10)).join('')}</span>`;
}

function listing(id) {
  return state.listings.find((item) => item.id === id);
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function fallbackArt(item, extraClass = '') {
  const iconName = CATEGORY_ICONS[item.category] || 'box';
  return `<div class="media-fallback tone-${slug(item.category)} ${extraClass}" aria-hidden="true">
    ${icon(iconName, 58)}<span>${esc(item.category)}</span>
  </div>`;
}

function imageTag(item, className = '') {
  if (!item.image) return '';
  return `<img class="${className}" src="${esc(item.image)}" alt="${esc(item.alt || item.title)}" loading="lazy" onerror="this.style.display='none'">`;
}

function reviewed(item) {
  return [
    {
      name: 'Maha S.',
      when: '2 weeks ago',
      stars: 5,
      text: `Exactly as described and packed with care. ${item.seller.name.split(' ')[0]} answered every question before I paid.`
    },
    {
      name: 'Hassan B.',
      when: 'Last month',
      stars: 5,
      text: 'Smooth handover, tracked delivery and the escrow release took one tap after I checked the item.'
    }
  ];
}

function filteredListings() {
  let items = state.listings.filter((item) => {
    if (state.category !== 'All' && item.category !== state.category) return false;
    if (state.city !== 'All GCC' && item.city !== state.city) return false;
    if (state.savedOnly && !state.saved.has(item.id)) return false;
    if (state.query.trim()) {
      const haystack = [
        item.title,
        item.category,
        item.city,
        item.condition,
        item.description,
        item.seller.name,
        ...(item.tags || [])
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(state.query.trim().toLowerCase())) return false;
    }
    return true;
  });

  if (state.sort === 'price-asc') items = items.slice().sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') items = items.slice().sort((a, b) => b.price - a.price);
  return items;
}

function cardMarkup(item) {
  const saved = state.saved.has(item.id);
  const isNew = Boolean(item.isNew);
  return `<article class="card" data-open="${esc(item.id)}" tabindex="0" role="button" aria-label="View ${esc(item.title)}">
    <div class="card-media">
      ${fallbackArt(item)}
      ${imageTag(item)}
      <span class="card-badge${isNew ? ' is-new' : ''}">${isNew ? 'Just listed' : icon('lock', 11) + ' Escrow'}</span>
      <button class="save${saved ? ' is-on' : ''}" data-save="${esc(item.id)}" aria-label="${saved ? 'Remove from saved' : 'Save'} ${esc(item.title)}" aria-pressed="${saved}">
        ${icon('heart', 16)}
      </button>
    </div>
    <div class="card-body">
      <div class="card-meta"><span class="cond">${esc(item.condition)}</span><span>${esc(item.city)}</span></div>
      <h3>${esc(item.title)}</h3>
      <div class="card-foot">
        <span class="price"><small>SAR</small>${Number(item.price).toLocaleString('en-US')}</span>
        <span class="seller-mini">${esc(item.seller.name)} <b>${icon('check', 11)}</b></span>
      </div>
    </div>
  </article>`;
}

function cityLabel() {
  return state.city === 'All GCC' ? 'across the Gulf' : `in ${state.city}`;
}

/* ---------- navigation ---------- */
function parseRoute() {
  const raw = (location.hash || '#/browse').replace(/^#\/?/, '');
  const parts = raw.split('/');
  const known = ['browse', 'sell', 'orders', 'ops', 'item'];
  return {
    route: known.includes(parts[0]) ? parts[0] : 'browse',
    id: parts[1] || ''
  };
}

function navigate(path) {
  location.hash = `#/${path}`;
}

function updateNav(route) {
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === route) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function syncInputs() {
  if (globalSearch.value !== state.query) globalSearch.value = state.query;
  const hero = document.getElementById('hero-search');
  if (hero && hero.value !== state.query) hero.value = state.query;
  if (citySelect.value !== state.city) citySelect.value = state.city;
  const sort = document.getElementById('sort-select');
  if (sort) sort.value = state.sort;
}

/* ---------- browse ---------- */
function heroFeatureMarkup() {
  const item = state.listings.find((entry) => entry.featured) || state.listings[0];
  return `<article class="hero-feature" data-open="${esc(item.id)}" tabindex="0" role="button" aria-label="View ${esc(item.title)}">
    <div class="feature-media">
      ${fallbackArt(item)}
      ${imageTag(item)}
      <span class="feature-tag">${icon('spark', 12)} Editor's pick</span>
      <span class="feature-escrow">${icon('shield', 13)} Escrow held until delivery</span>
      <div class="feature-overlay">
        <span class="feature-kicker">${esc(item.condition)} · ${esc(item.city)}</span>
        <h3>${esc(item.title)}</h3>
        <span class="feature-price">${money(item.price)}</span>
      </div>
    </div>
  </article>`;
}

function renderBrowse() {
  view.innerHTML = `
    <div class="shell">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow"><span class="dot"></span> Riyadh · Dubai · Doha · Kuwait · Manama</p>
          <h1>Good things deserve a <em>second</em> life.</h1>
          <p class="lede">Buy and sell pre-owned pieces across Saudi Arabia and the Gulf. Every order is escrow-protected, every seller is ID-checked, and every delivery is tracked from door to door.</p>
          <div class="hero-search">
            ${icon('search', 18)}
            <input id="hero-search" type="search" value="${esc(state.query)}" placeholder="Try “lounge chair” or “size 9”" autocomplete="off" aria-label="Search the market">
            <button class="btn btn-primary" id="hero-search-go" type="button" aria-label="Search">${icon('arrow', 17)}<span>Search</span></button>
          </div>
          <div class="quick">
            <span>Popular:</span>
            <button data-query="lounge chair" type="button">lounge chair</button>
            <button data-query="camera" type="button">film camera</button>
            <button data-query="size 9" type="button">size 9</button>
            <button data-query="Riyadh" type="button">Riyadh</button>
          </div>
          <div class="hero-proof">
            <span>${icon('shield', 15)} Payment held in escrow</span>
            <span>${icon('id', 15)} Sellers ID-checked</span>
            <span>${icon('truck', 15)} Tracked delivery</span>
          </div>
        </div>
        ${heroFeatureMarkup()}
      </section>

      <section class="trust-rail" aria-label="How Thanya protects you">
        <div class="trust-item">
          <span class="trust-icon">${icon('shield', 18)}</span>
          <div><h4>Escrow, not hope</h4><p>Your payment is held until you confirm the item arrived as described.</p></div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">${icon('id', 18)}</span>
          <div><h4>Real people, checked</h4><p>National ID and phone verified before a seller can list their first item.</p></div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">${icon('truck', 18)}</span>
          <div><h4>Tracked, door to door</h4><p>Delivery is booked with a partner carrier and updates land in your orders.</p></div>
        </div>
      </section>

      <section class="market" id="market">
        <div class="section-head">
          <div>
            <p class="eyebrow"><span class="dot"></span> The market</p>
            <h2>Fresh <span id="city-label">${esc(cityLabel())}</span></h2>
          </div>
          <div class="section-tools">
            <label class="select-wrap">
              <select id="sort-select" aria-label="Sort listings">
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
              ${icon('chevron', 12)}
            </label>
            <button class="saved-filter${state.savedOnly ? ' is-on' : ''}" id="saved-filter" type="button" aria-pressed="${state.savedOnly}" data-saved-filter>
              ${icon('heart', 14)} Saved <span id="saved-count">${state.saved.size}</span>
            </button>
          </div>
        </div>
        <p class="result-count" id="result-count"></p>
        <div class="filters" role="group" aria-label="Filter by category">
          ${CATEGORIES.map(
            (category) =>
              `<button class="chip${state.category === category ? ' is-on' : ''}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>`
          ).join('')}
        </div>
        <div class="grid" id="listing-grid"></div>
        <div class="empty" id="empty-state" hidden>
          <h3>No pieces match that yet.</h3>
          <p>Try a different search, widen the city, or clear the filters.</p>
          <button class="btn btn-soft" type="button" data-clear-filters>Clear filters</button>
        </div>
      </section>
    </div>

    <section class="escrow-band" id="how-escrow">
      <div class="shell">
        <div>
          <h2>Money moves only when you say <em>so.</em></h2>
          <p>Thanya holds the buyer's payment in escrow from checkout to confirmed delivery. No chasing, no awkward transfers, no disappearing sellers.</p>
        </div>
        <div class="escrow-steps">
          <div class="escrow-step"><span>01</span><h4>Pay into escrow</h4><p>Card, mada or Apple Pay. The seller sees the order, not your money.</p></div>
          <div class="escrow-step"><span>02</span><h4>Seller ships</h4><p>A tracked label is booked with a delivery partner and updates appear in your order.</p></div>
          <div class="escrow-step"><span>03</span><h4>You confirm</h4><p>Only then is the payment released. Not as described? Open a case first.</p></div>
        </div>
      </div>
    </section>`;

  updateGrid();
  syncInputs();
}

function updateGrid() {
  const grid = document.getElementById('listing-grid');
  if (!grid) return;
  const items = filteredListings();
  grid.innerHTML = items.map(cardMarkup).join('');
  const count = document.getElementById('result-count');
  if (count) {
    count.textContent = `${items.length} ${items.length === 1 ? 'piece' : 'pieces'} · ${cityLabel()} · every order escrow-protected`;
  }
  const empty = document.getElementById('empty-state');
  if (empty) empty.hidden = items.length > 0;
  const city = document.getElementById('city-label');
  if (city) city.textContent = cityLabel();
  const savedCount = document.getElementById('saved-count');
  if (savedCount) savedCount.textContent = state.saved.size;
  const savedFilter = document.getElementById('saved-filter');
  if (savedFilter) {
    savedFilter.classList.toggle('is-on', state.savedOnly);
    savedFilter.setAttribute('aria-pressed', String(state.savedOnly));
  }
  document.querySelectorAll('[data-category]').forEach((chip) => {
    const on = chip.dataset.category === state.category;
    chip.classList.toggle('is-on', on);
    chip.setAttribute('aria-pressed', String(on));
  });
}

/* ---------- detail ---------- */
function renderItem(id) {
  const item = listing(id);
  if (!item) {
    navigate('browse');
    return;
  }
  const saved = state.saved.has(item.id);
  const similar = state.listings.filter((entry) => entry.id !== item.id && entry.category === item.category).slice(0, 3);
  const fill = similar.length
    ? similar
    : state.listings.filter((entry) => entry.id !== item.id).slice(0, 3);
  const reviews = reviewed(item);

  view.innerHTML = `
    <div class="shell detail">
      <a class="back" href="#/browse">${icon('arrow', 14)} Back to the market</a>
      <div class="detail-grid">
        <div class="detail-media">
          ${fallbackArt(item)}
          ${imageTag(item)}
        </div>
        <div class="detail-info">
          <p class="eyebrow"><span class="dot"></span> ${esc(item.category)} · ${esc(item.city)}</p>
          <h1>${esc(item.title)}</h1>
          <div class="price-row">
            <span class="price-big">${money(item.price)}</span>
            <span class="pill">${esc(item.condition)}</span>
            <span class="pill clay">${icon('lock', 11)} Escrow</span>
          </div>
          <p class="detail-desc">${esc(item.description)}</p>
          <div class="specs">
            <div><span>Condition</span><strong>${esc(item.condition)}</strong></div>
            <div><span>Delivery</span><strong>2-4 working days</strong></div>
            <div><span>Listed</span><strong>${esc(item.posted)}</strong></div>
          </div>
          <div class="seller-card">
            <span class="seller-avatar">${esc(item.seller.initials)}</span>
            <div>
              <h4>${esc(item.seller.name)} ${icon('check', 13)}</h4>
              <p>ID verified · Member since ${item.seller.since} · ${item.seller.sales} sales</p>
            </div>
            <div class="seller-rating">
              <strong>${item.seller.rating.toFixed(1)}</strong>
              ${stars(5)}
            </div>
          </div>
          <div class="protection">
            <h4>${icon('shield', 15)} Thanya buyer protection</h4>
            <ul>
              <li>${icon('check', 13)} Payment is held in escrow until you confirm delivery.</li>
              <li>${icon('check', 13)} Seller identity and phone number are verified.</li>
              <li>${icon('check', 13)} Report a problem within 48 hours for a mediated return.</li>
            </ul>
          </div>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-buy="${esc(item.id)}">${icon('lock', 17)} Buy with escrow</button>
            <button class="btn btn-ghost${saved ? ' is-on' : ''}" type="button" data-save="${esc(item.id)}" aria-label="${saved ? 'Remove from saved' : 'Save'} ${esc(item.title)}" aria-pressed="${saved}">
              ${icon('heart', 18)}
            </button>
          </div>
          <p class="fineprint">Delivery calculated at checkout · Payment released only after you confirm</p>
        </div>
      </div>

      <div class="reviews-wrap">
        <div class="reviews-block">
          <h3>From recent buyers</h3>
          ${reviews
            .map(
              (review) => `<article class="review">
                <div class="review-head">
                  <span class="seller-avatar">${esc(review.name.charAt(0))}</span>
                  <div><h4>${esc(review.name)}</h4><p>${esc(review.when)}</p></div>
                  <span class="review-stars">${Array.from({ length: review.stars }, () => icon('star', 10)).join('')}</span>
                </div>
                <p>${esc(review.text)}</p>
              </article>`
            )
            .join('')}
        </div>
        <div class="similar">
          <h3>More in ${esc(item.category)}</h3>
          <div class="similar-grid">${fill.map(cardMarkup).join('')}</div>
        </div>
      </div>
    </div>`;
  syncInputs();
}

/* ---------- checkout ---------- */
function checkoutTotal(item) {
  return item.price + DELIVERY[state.checkoutDelivery];
}

function openCheckout(id) {
  const item = listing(id);
  if (!item) return;
  state.checkoutListing = item;
  state.checkoutDelivery = 'standard';
  state.checkoutPayment = 'mada';
  state.previousFocus = document.activeElement;
  const total = checkoutTotal(item);

  modalRoot.innerHTML = `
    <div class="overlay" data-overlay>
      <div class="checkout" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
        <button class="modal-close" type="button" data-close aria-label="Close checkout">${icon('close', 15)}</button>
        <div class="checkout-main">
          <p class="secure-line">${icon('lock', 13)} Secure checkout</p>
          <h2 id="checkout-title">Complete your order</h2>
          <p class="checkout-sub">Your payment is held by Thanya until you confirm delivery.</p>

          <div class="step-block">
            <div class="step-title"><span class="step-num">1</span> Delivery address</div>
            <div class="address-card">
              ${icon('pin', 17)}
              <div><strong>Layla A. · Al Olaya, Riyadh</strong><p>King Fahd Road, Building 18, Apt 4<br>Riyadh 12211, Saudi Arabia · +966 5•• ••• 214</p></div>
            </div>
          </div>

          <div class="step-block">
            <div class="step-title"><span class="step-num">2</span> Delivery speed</div>
            <div class="radio-list">
              <label class="radio-card">
                <input type="radio" name="delivery" value="standard" checked>
                <span class="radio-dot"></span>
                <span class="r-main"><strong>Standard tracked</strong><p>2-4 working days · Aramex</p></span>
                <span class="r-price">${money(DELIVERY.standard)}</span>
              </label>
              <label class="radio-card">
                <input type="radio" name="delivery" value="express">
                <span class="radio-dot"></span>
                <span class="r-main"><strong>Express</strong><p>Next working day · Riyadh and Jeddah</p></span>
                <span class="r-price">${money(DELIVERY.express)}</span>
              </label>
            </div>
          </div>

          <div class="step-block">
            <div class="step-title"><span class="step-num">3</span> Payment method</div>
            <div class="radio-list">
              <label class="radio-card">
                <input type="radio" name="payment" value="mada" checked>
                <span class="radio-dot"></span>
                <span class="card-brand">mada</span>
                <span class="r-main"><strong>mada ending 4421</strong><p>Saved card · expires 09/28</p></span>
              </label>
              <label class="radio-card">
                <input type="radio" name="payment" value="applepay">
                <span class="radio-dot"></span>
                <span class="card-brand">Pay</span>
                <span class="r-main"><strong>Apple Pay</strong><p>Confirm with Face ID</p></span>
              </label>
              <label class="radio-card">
                <input type="radio" name="payment" value="new">
                <span class="radio-dot"></span>
                <span class="card-brand">+</span>
                <span class="r-main"><strong>New card</strong><p>Visa, Mastercard or mada</p></span>
              </label>
            </div>
          </div>

          <div class="escrow-note">
            ${icon('shield', 17)}
            <p><strong>This is escrow, not a tip.</strong> Thanya holds ${money(total)} and releases it to ${esc(item.seller.name)} only after you confirm the item arrived as described. Demo checkout: no card is charged.</p>
          </div>
        </div>

        <aside class="checkout-summary" aria-label="Order summary">
          <p class="eyebrow"><span class="dot"></span> Order summary</p>
          <div class="summary-item" style="margin-top:14px">
            <div class="summary-thumb">${fallbackArt(item)}${imageTag(item)}</div>
            <div>
              <h4>${esc(item.title)}</h4>
              <p>${esc(item.condition)} · ${esc(item.city)}</p>
              <div class="price">${money(item.price)}</div>
            </div>
          </div>
          <div class="summary-lines">
            <div class="summary-line"><span>Item</span><span>${money(item.price)}</span></div>
            <div class="summary-line"><span>Delivery</span><span id="sum-shipping">${money(DELIVERY[state.checkoutDelivery])}</span></div>
            <div class="summary-line"><span>Buyer protection</span><span class="free">Included</span></div>
          </div>
          <div class="summary-total"><span>Total held in escrow</span><strong id="sum-total">${money(total)}</strong></div>
          <div class="pay-now">
            <button class="btn btn-primary btn-block" type="button" data-pay="${esc(item.id)}" aria-busy="false">
              ${icon('lock', 17)} <span id="pay-label">Pay ${money(total)} into escrow</span>
            </button>
            <div class="trust-mini">
              <p>${icon('check', 12)} Released only when you confirm delivery</p>
              <p>${icon('check', 12)} ID-checked seller · 48-hour issue window</p>
            </div>
          </div>
        </aside>
      </div>
    </div>`;

  document.body.classList.add('no-scroll');
  const close = modalRoot.querySelector('[data-close]');
  if (close) close.focus({ preventScroll: true });
}

function closeModal() {
  if (payTimer) {
    clearTimeout(payTimer);
    payTimer = null;
  }
  modalRoot.innerHTML = '';
  document.body.classList.remove('no-scroll');
  state.checkoutListing = null;
  if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
    state.previousFocus.focus({ preventScroll: true });
  }
  state.previousFocus = null;
}

function updateCheckoutTotals() {
  const item = state.checkoutListing;
  if (!item) return;
  const shipping = DELIVERY[state.checkoutDelivery];
  const total = item.price + shipping;
  const shipEl = document.getElementById('sum-shipping');
  const totalEl = document.getElementById('sum-total');
  const label = document.getElementById('pay-label');
  if (shipEl) shipEl.textContent = money(shipping);
  if (totalEl) totalEl.textContent = money(total);
  if (label) label.textContent = `Pay ${money(total)} into escrow`;
}

function createOrder(item) {
  const total = checkoutTotal(item);
  const order = {
    id: `TH-${Math.floor(2500 + Math.random() * 480)}`,
    listingId: item.id,
    status: 'held',
    placed: 'Just now',
    total,
    seller: item.seller.name,
    tracking: null,
    timeline: [
      { label: 'Order placed', detail: 'Just now', state: 'done' },
      { label: 'Payment held in escrow', detail: `${money(total)} secured by Thanya`, state: 'done' },
      { label: 'Seller preparing', detail: `${item.seller.name} has 2 days to ship`, state: 'current' },
      { label: 'Shipped with Aramex', detail: 'Tracking will appear here', state: 'todo' },
      { label: 'Delivered', detail: 'Confirm to release funds', state: 'todo' }
    ]
  };
  state.orders.unshift(order);
  return order;
}

function showSuccess(order, item) {
  modalRoot.innerHTML = `
    <div class="overlay" data-overlay>
      <div class="success-card" role="dialog" aria-modal="true" aria-labelledby="success-title">
        <button class="modal-close" type="button" data-close aria-label="Close confirmation">${icon('close', 15)}</button>
        <div class="success-check">${icon('check', 27)}</div>
        <p class="eyebrow" style="justify-content:center">Payment held in escrow</p>
        <h2 id="success-title">Your money is safe.</h2>
        <p class="success-sub"><strong>${money(order.total)}</strong> is held by Thanya. We release it to ${esc(item.seller.name)} only after you confirm the ${esc(item.title)} arrived as described.</p>
        <div class="receipt">
          <div class="receipt-line"><span>Order</span><strong>${esc(order.id)}</strong></div>
          <div class="receipt-line"><span>Item</span><strong>${esc(item.title)}</strong></div>
          <div class="receipt-line"><span>Seller</span><strong>${esc(item.seller.name)}</strong></div>
          <div class="receipt-line"><span>Held in escrow</span><strong>${money(order.total)}</strong></div>
        </div>
        <div class="success-next">
          <div><span>Next</span><p>Seller ships within 2 days</p></div>
          <div><span>Then</span><p>Track it in your orders</p></div>
          <div><span>Finally</span><p>Confirm and release funds</p></div>
        </div>
        <div class="success-actions">
          <button class="btn btn-primary btn-block" type="button" data-go-orders>Track this order ${icon('arrow', 17)}</button>
          <button class="btn btn-ghost btn-block" type="button" data-keep-browsing>Keep browsing</button>
        </div>
      </div>
    </div>`;
  document.body.classList.add('no-scroll');
  const close = modalRoot.querySelector('[data-close]');
  if (close) close.focus({ preventScroll: true });
}

function startPayment(button) {
  const item = state.checkoutListing;
  if (!item || button.dataset.busy === '1') return;
  button.dataset.busy = '1';
  button.setAttribute('aria-busy', 'true');
  button.classList.add('pay-loading');
  button.innerHTML = `${icon('lock', 17)} <span>Holding your payment…</span>`;
  payTimer = setTimeout(() => {
    payTimer = null;
    const order = createOrder(item);
    showSuccess(order, item);
  }, 850);
}

/* ---------- orders ---------- */
function renderOrders() {
  const active = state.orders.filter((order) => order.status !== 'delivered');
  const past = state.orders.filter((order) => order.status === 'delivered');

  view.innerHTML = `
    <div class="shell page">
      <div class="page-head">
        <div>
          <p class="eyebrow"><span class="dot"></span> Your orders</p>
          <h1>Nothing gets lost.</h1>
          <p class="page-sub">Every order keeps its own escrow state and tracking trail. Confirm delivery only when the item is in your hands.</p>
        </div>
        <a class="btn btn-ghost" href="#/browse">${icon('grid', 16)} Keep browsing</a>
      </div>
      ${
        active.length
          ? `<div class="orders-layout">
              <div style="display:grid;gap:18px">${active.map(orderCardMarkup).join('')}</div>
              <aside class="side-stack">
                <div class="side-card">
                  <h4>${icon('shield', 14)} How escrow releases</h4>
                  <p>Thanya holds your payment until you confirm delivery. If something is wrong, open a case within 48 hours and do not confirm.</p>
                  <div class="side-line"><span>Payment protection</span><strong>Included</strong></div>
                  <div class="side-line"><span>Support window</span><strong>48 hours</strong></div>
                </div>
                <div class="side-card">
                  <h4>${icon('truck', 14)} Delivery partner</h4>
                  <p>Tracked shipments are booked with Aramex. Tracking numbers appear here as soon as the seller hands the parcel over.</p>
                  <div class="side-line"><span>Coverage</span><strong>GCC-wide</strong></div>
                  <div class="side-line"><span>Delivery estimate</span><strong>2-4 days</strong></div>
                </div>
              </aside>
            </div>`
          : `<div class="empty">
              <h3>No active orders.</h3>
              <p>When you buy something with escrow, it will appear here.</p>
              <a class="btn btn-primary" href="#/browse">Browse the market</a>
            </div>`
      }
      ${
        past.length
          ? `<h2 class="past-title">Past orders</h2>
             <div class="table-scroll">
               <table class="past-table">
                 <thead><tr><th>Order</th><th>Item</th><th>Seller</th><th>Total</th><th>Status</th></tr></thead>
                 <tbody>
                   ${past
                     .map((order) => {
                       const item = listing(order.listingId);
                       return `<tr>
                         <td class="mono">${esc(order.id)}</td>
                         <td>${esc(item ? item.title : 'Listing removed')}</td>
                         <td>${esc(order.seller)}</td>
                         <td><span class="price">${money(order.total)}</span></td>
                         <td><span class="status done">Delivered</span></td>
                       </tr>`;
                     })
                     .join('')}
                 </tbody>
               </table>
             </div>`
          : ''
      }
    </div>`;
}

function orderCardMarkup(order) {
  const item = listing(order.listingId);
  const statusClass = order.status === 'transit' ? 'transit' : 'held';
  const statusLabel = order.status === 'transit' ? 'In transit' : 'In escrow';
  return `<article class="order-card">
    <div class="order-head">
      <div><span class="order-id">Order ${esc(order.id)}</span><span class="order-date">${esc(order.placed)}</span></div>
      <span class="status ${statusClass}">${statusLabel}</span>
    </div>
    <div class="order-body">
      <div class="order-item">
        <div class="order-thumb">${item ? fallbackArt(item) : ''}${item ? imageTag(item) : ''}</div>
        <div>
          <h3>${esc(item ? item.title : 'Listing removed')}</h3>
          <p>Sold by ${esc(order.seller)} · ${item ? esc(item.city) : 'GCC'}</p>
          <p>${order.tracking ? `Aramex · ${esc(order.tracking)}` : 'Tracking will appear when the seller ships'}</p>
        </div>
        <span class="price">${money(order.total)}</span>
      </div>
      <div class="timeline">
        ${order.timeline
          .map(
            (step) => `<div class="tl-step ${step.state}">
              <span class="tl-dot">${step.state === 'done' ? icon('check', 9) : ''}</span>
              <div class="tl-body"><h4>${esc(step.label)}</h4><p>${esc(step.detail)}</p></div>
            </div>`
          )
          .join('')}
      </div>
      <div class="order-actions">
        ${
          order.status === 'transit'
            ? `<button class="btn btn-primary" type="button" data-confirm-order="${esc(order.id)}">${icon('check', 16)} Confirm delivery and release escrow</button>
               <span class="hint">Only confirm once the item is in your hands.</span>`
            : `<span class="hint">${icon('lock', 12)} Escrow releases after delivery is confirmed. ${esc(order.seller)} has 2 days to ship.</span>`
        }
      </div>
    </div>
  </article>`;
}

function confirmOrder(id) {
  const order = state.orders.find((entry) => entry.id === id);
  if (!order) return;
  order.status = 'delivered';
  order.timeline = order.timeline.map((step) => ({
    ...step,
    state: 'done',
    detail:
      step.label === 'Delivered'
        ? `Confirmed just now. ${money(order.total)} released to ${order.seller}.`
        : step.detail
  }));
  render();
  toast(`Delivery confirmed. ${money(order.total)} released to ${order.seller}.`);
}

/* ---------- sell ---------- */
function renderSell() {
  const categories = CATEGORIES.filter((category) => category !== 'All');
  view.innerHTML = `
    <div class="shell page">
      <div class="page-head">
        <div>
          <p class="eyebrow"><span class="dot"></span> Sell on Thanya</p>
          <h1>Turn a good thing into someone's next thing.</h1>
          <p class="page-sub">List free. Pay 8% only when the item sells. Sellers are ID-checked, so buyers know exactly who they are dealing with.</p>
        </div>
        <div class="verified-flag">${icon('check', 12)} Layla A. · ID verified</div>
      </div>
      <div class="sell-layout">
        <form class="form-card" id="sell-form" novalidate>
          <div class="form-section">
            <h3>What are you selling?</h3>
            <p class="section-hint">One clear photo, an honest description and a fair price is all it takes.</p>
            <label class="dropzone${state.photoData ? ' has-photo' : ''}" id="dropzone">
              <input type="file" id="photo-input" accept="image/*" aria-label="Upload a photo">
              <span class="dz-copy" style="display:grid;place-items:center;gap:4px">${icon('camera', 25)}<strong>Add a photo</strong><span>JPG or PNG, up to 10 MB</span></span>
              ${state.photoData ? `<img src="${esc(state.photoData)}" alt="Your listing preview">` : ''}
            </label>
            <div class="field" style="margin-top:13px">
              <label for="title">Title</label>
              <input id="title" name="title" type="text" placeholder="Teak lounge chair, 1960s" maxlength="70" autocomplete="off">
            </div>
            <div class="field-row" style="margin-top:13px">
              <div class="field">
                <label for="category">Category</label>
                <select id="category" name="category">${categories.map((category) => `<option value="${category}">${category}</option>`).join('')}</select>
              </div>
              <div class="field">
                <label for="city">City</label>
                <select id="city" name="city">
                  <option>Riyadh</option><option>Jeddah</option><option>Dubai</option><option>Doha</option><option>Kuwait City</option><option>Manama</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>Condition and price</h3>
            <p class="section-hint">Buyers trust specifics. Say what is good and what is not.</p>
            <div class="field">
              <label>Condition</label>
              <div class="seg">
                <label><input type="radio" name="condition" value="Like new" checked>Like new</label>
                <label><input type="radio" name="condition" value="Excellent">Excellent</label>
                <label><input type="radio" name="condition" value="Good">Good</label>
              </div>
            </div>
            <div class="field">
              <label for="price">Price (SAR)</label>
              <input id="price" name="price" type="number" min="1" max="100000" step="1" placeholder="1250" inputmode="numeric">
              <span class="hint">Buyer pays delivery at checkout. Thanya's 8% seller fee comes out of the sale.</span>
            </div>
            <div class="fee-note"><span>You receive after the 8% fee</span><strong id="fee-total">SAR 0</strong></div>
            <div class="field" style="margin-top:13px">
              <label for="description">Description</label>
              <textarea id="description" name="description" maxlength="600" placeholder="Tell buyers about the condition, what is included, and any marks worth mentioning."></textarea>
            </div>
            <label class="checkline" style="margin-top:14px">
              <input type="checkbox" name="ownership" id="ownership">
              <span>I confirm this item is mine to sell and the photos and description are accurate.</span>
            </label>
          </div>

          <div class="form-section">
            <button class="btn btn-primary btn-block" type="submit">${icon('plus', 17)} Publish listing</button>
            <p class="fineprint" style="margin-top:9px">Demo listing: it appears in the market for this session only.</p>
          </div>
        </form>

        <aside class="preview-col">
          <div class="preview-label"><span>Live preview</span><span>What buyers see</span></div>
          <article class="preview-card">
            <div class="card-media" id="preview-media">
              ${fallbackArt({ category: 'Furniture' })}
            </div>
            <div class="card-body">
              <div class="card-meta"><span class="cond" id="preview-cond">Like new</span><span id="preview-city">Riyadh</span></div>
              <h3 id="preview-title">Your item</h3>
              <div class="card-foot">
                <span class="price" id="preview-price"><small>SAR</small>0</span>
                <span class="seller-mini">Layla A. <b>${icon('check', 11)}</b></span>
              </div>
            </div>
          </article>
          <div class="next-steps">
            <h4>What happens next</h4>
            <ol>
              <li>Your listing goes live to buyers in your city first.</li>
              <li>When it sells, the buyer's payment is held in escrow.</li>
              <li>Book the tracked handover, then get paid after delivery is confirmed.</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>`;

  updateSellPreview();
  updateFee();
  syncInputs();
}

function updateSellPreview() {
  const title = document.getElementById('title');
  if (!title) return;
  const price = document.getElementById('price');
  const category = document.getElementById('category');
  const city = document.getElementById('city');
  const condition = document.querySelector('input[name="condition"]:checked');
  document.getElementById('preview-title').textContent = title.value.trim() || 'Your item';
  document.getElementById('preview-cond').textContent = condition ? condition.value : 'Excellent';
  document.getElementById('preview-city').textContent = city ? city.value : 'Riyadh';
  document.getElementById('preview-price').innerHTML = `<small>SAR</small>${Number(price.value || 0).toLocaleString('en-US')}`;

  const media = document.getElementById('preview-media');
  const item = { category: category ? category.value : 'Furniture' };
  const photo = state.photoData
    ? `<img src="${esc(state.photoData)}" alt="Your listing preview">`
    : '';
  media.innerHTML = `${fallbackArt(item)}${photo}`;
}

function updateFee() {
  const priceInput = document.getElementById('price');
  const fee = document.getElementById('fee-total');
  if (!priceInput || !fee) return;
  const amount = Number(priceInput.value || 0);
  fee.textContent = money(Math.round(amount * 0.92));
}

function publishListing(form) {
  const data = new FormData(form);
  const title = String(data.get('title') || '').trim();
  const price = Number(data.get('price') || 0);
  const city = String(data.get('city') || 'Riyadh');
  const category = String(data.get('category') || 'Furniture');
  const condition = String(data.get('condition') || 'Excellent');
  const description = String(data.get('description') || '').trim();
  const ownership = document.getElementById('ownership');

  if (!title) {
    toast('Give the listing a title first.');
    document.getElementById('title').focus();
    return;
  }
  if (!price || price < 1) {
    toast('Add a price in SAR.');
    document.getElementById('price').focus();
    return;
  }
  if (!ownership.checked) {
    toast('Please confirm the item is yours to sell.');
    ownership.focus();
    return;
  }

  const item = {
    id: `listing-${Date.now()}`,
    title,
    category,
    price: Math.round(price),
    city,
    condition,
    seller: { name: 'Layla A.', initials: 'LA', rating: 5.0, sales: 0, since: 2026 },
    posted: 'Just now',
    image: state.photoData,
    alt: title,
    description: description || 'Listed on Thanya. Ask the seller for more details.',
    tags: [category, city, condition],
    isNew: true
  };
  state.listings.unshift(item);
  state.query = '';
  state.category = 'All';
  state.city = 'All GCC';
  state.savedOnly = false;
  state.photoData = null;
  navigate('browse');
  toast(`Listing published in ${city}. It is first in the market.`);
}

/* ---------- ops ---------- */
function renderOps() {
  const transactions = [
    { id: 'TH-2493', item: 'Teak lounge chair', buyer: 'Layla A.', amount: 1250, status: 'Held', age: '2h' },
    { id: 'TH-2492', item: 'Sony WH-1000XM4', buyer: 'Hassan B.', amount: 805, status: 'In transit', age: '5h' },
    { id: 'TH-2491', item: 'Canon AE-1', buyer: 'Maha S.', amount: 950, status: 'Released', age: '1d' },
    { id: 'TH-2490', item: 'Tissot PRX', buyer: 'Omar K.', amount: 1650, status: 'Held', age: '1d' },
    { id: 'TH-2489', item: 'Specialized Allez', buyer: 'Faisal S.', amount: 2400, status: 'Released', age: '2d' }
  ];
  const statusClass = (status) => (status === 'In transit' ? 'transit' : status === 'Held' ? 'held' : 'released');

  view.innerHTML = `
    <div class="shell page">
      <div class="page-head">
        <div>
          <p class="eyebrow"><span class="dot"></span> Thanya operations</p>
          <h1>The quiet side of trust.</h1>
          <p class="page-sub">Moderation, seller verification, escrow exposure and delivery exceptions across the market. Seeded demo data for this prototype.</p>
        </div>
        <button class="btn btn-ghost" type="button" data-refresh-ops>${icon('arrow', 16)} Refresh desk</button>
      </div>

      <div class="kpis">
        <div class="kpi"><span>GMV this week</span><strong>SAR 184,300</strong><small class="up">+12.4% vs last week</small></div>
        <div class="kpi"><span>Held in escrow</span><strong>SAR 41,750</strong><small>18 open orders</small></div>
        <div class="kpi"><span>Active listings</span><strong>1,284</strong><small>Across 9 categories</small></div>
        <div class="kpi"><span>Awaiting verification</span><strong id="queue-count">${state.pendingSellers.length}</strong><small>Target SLA: 4 hours</small></div>
      </div>

      <div class="ops-grid">
        <section class="panel">
          <div class="panel-head"><h3>Escrow transactions</h3><span class="count">Live demo ledger</span></div>
          <div class="table-scroll">
            <table class="data-table">
              <thead><tr><th>Order</th><th>Item</th><th>Buyer</th><th>Amount</th><th>Status</th><th>Age</th></tr></thead>
              <tbody>
                ${transactions
                  .map(
                    (transaction) => `<tr>
                      <td class="mono">${esc(transaction.id)}</td>
                      <td>${esc(transaction.item)}</td>
                      <td>${esc(transaction.buyer)}</td>
                      <td class="num">${money(transaction.amount)}</td>
                      <td><span class="status ${statusClass(transaction.status)}">${esc(transaction.status)}</span></td>
                      <td class="sub">${esc(transaction.age)}</td>
                    </tr>`
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        </section>

        <div style="display:grid;gap:16px">
          <section class="panel">
            <div class="panel-head"><h3>Seller verification</h3><span class="count">${state.pendingSellers.length} in queue</span></div>
            <div class="queue" id="verification-queue">
              ${
                state.pendingSellers.length
                  ? state.pendingSellers
                      .map(
                        (seller) => `<div class="queue-row">
                          <span class="queue-avatar">${esc(seller.initials)}</span>
                          <div class="queue-body"><strong>${esc(seller.name)}</strong><p>${esc(seller.city)} · ${esc(seller.detail)}</p></div>
                          <div class="queue-actions">
                            <button class="mini-btn approve" type="button" data-approve="${esc(seller.id)}">Approve</button>
                            <button class="mini-btn" type="button" data-reject="${esc(seller.id)}" aria-label="Decline ${esc(seller.name)}">Decline</button>
                          </div>
                        </div>`
                      )
                      .join('')
                  : `<div class="queue-row"><div class="queue-body"><strong>Queue clear</strong><p>Every seller has been reviewed.</p></div></div>`
              }
            </div>
          </section>

          <section class="panel">
            <div class="panel-head"><h3>Delivery exceptions</h3><span class="count">2 open</span></div>
            <div class="exception">
              ${icon('truck', 15)}
              <div><strong>Aramex pickup missed · Riyadh</strong><p>Order TH-2477 · seller unavailable at the pickup window.</p></div>
              <button class="mini-btn" type="button" data-notify="The seller has been rebooked for tomorrow's pickup.">Rebook</button>
            </div>
            <div class="exception">
              ${icon('pin', 15)}
              <div><strong>Address needs a landmark · Jeddah</strong><p>Order TH-2468 · buyer has not replied to the courier.</p></div>
              <button class="mini-btn" type="button" data-notify="A reminder SMS was sent to the buyer.">Notify</button>
            </div>
          </section>
        </div>
      </div>
      <p class="ops-note">Prototype note: this console is a guided demo of the moderation and escrow view, not a production admin tool. Approve and decline actions update the queue for this session only.</p>
    </div>`;
  syncInputs();
}

/* ---------- routing ---------- */
function render() {
  const { route, id } = parseRoute();
  updateNav(route === 'item' ? 'browse' : route);
  closeModal();
  if (route === 'browse') {
    document.title = "Thanya — the Gulf's trusted resale market";
    renderBrowse();
  } else if (route === 'item') {
    const item = listing(id);
    document.title = item ? `${item.title} — Thanya` : 'Thanya — the Gulf\u2019s resale market';
    renderItem(id);
  } else if (route === 'orders') {
    document.title = 'Your orders — Thanya';
    renderOrders();
  } else if (route === 'sell') {
    document.title = 'Sell on Thanya';
    renderSell();
  } else if (route === 'ops') {
    document.title = 'Operations — Thanya';
    renderOps();
  }
  syncInputs();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function toast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('is-on');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 2800);
}

/* ---------- events ---------- */
document.addEventListener('click', (event) => {
  const save = event.target.closest('[data-save]');
  if (save) {
    event.preventDefault();
    event.stopPropagation();
    const id = save.dataset.save;
    if (state.saved.has(id)) state.saved.delete(id);
    else state.saved.add(id);
    const on = state.saved.has(id);
    document.querySelectorAll(`[data-save="${CSS.escape(id)}"]`).forEach((button) => {
      button.classList.toggle('is-on', on);
      button.setAttribute('aria-pressed', String(on));
    });
    const count = document.getElementById('saved-count');
    if (count) count.textContent = state.saved.size;
    toast(on ? 'Saved for later.' : 'Removed from saved.');
    if (state.savedOnly) updateGrid();
    return;
  }

  const open = event.target.closest('[data-open]');
  if (open) {
    navigate(`item/${open.dataset.open}`);
    return;
  }

  const category = event.target.closest('[data-category]');
  if (category) {
    state.category = category.dataset.category;
    updateGrid();
    return;
  }

  const footerCategory = event.target.closest('[data-footer-category]');
  if (footerCategory) {
    state.category = footerCategory.dataset.footerCategory;
    state.query = '';
    state.savedOnly = false;
    if (parseRoute().route !== 'browse') navigate('browse');
    else {
      updateGrid();
      document.getElementById('market')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  const query = event.target.closest('[data-query]');
  if (query) {
    state.query = query.dataset.query;
    state.category = 'All';
    state.savedOnly = false;
    if (parseRoute().route !== 'browse') navigate('browse');
    else {
      syncInputs();
      updateGrid();
      document.getElementById('market')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  if (event.target.closest('[data-saved-filter]')) {
    state.savedOnly = !state.savedOnly;
    updateGrid();
    return;
  }

  if (event.target.closest('[data-clear-filters]')) {
    state.query = '';
    state.category = 'All';
    state.city = 'All GCC';
    state.savedOnly = false;
    syncInputs();
    updateGrid();
    return;
  }

  if (event.target.closest('#hero-search-go')) {
    document.getElementById('market')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  const buy = event.target.closest('[data-buy]');
  if (buy) {
    openCheckout(buy.dataset.buy);
    return;
  }

  if (event.target.closest('[data-close]')) {
    closeModal();
    return;
  }
  if (event.target.dataset.overlay !== undefined) {
    closeModal();
    return;
  }

  if (event.target.closest('[data-pay]')) {
    startPayment(event.target.closest('[data-pay]'));
    return;
  }

  if (event.target.closest('[data-go-orders]')) {
    closeModal();
    navigate('orders');
    return;
  }

  if (event.target.closest('[data-keep-browsing]')) {
    closeModal();
    navigate('browse');
    return;
  }

  const confirm = event.target.closest('[data-confirm-order]');
  if (confirm) {
    confirmOrder(confirm.dataset.confirmOrder);
    return;
  }

  const approve = event.target.closest('[data-approve]');
  if (approve) {
    const seller = state.pendingSellers.find((entry) => entry.id === approve.dataset.approve);
    state.pendingSellers = state.pendingSellers.filter((entry) => entry.id !== approve.dataset.approve);
    renderOps();
    toast(`${seller ? seller.name : 'Seller'} verified. They can now list.`);
    return;
  }

  const reject = event.target.closest('[data-reject]');
  if (reject) {
    const seller = state.pendingSellers.find((entry) => entry.id === reject.dataset.reject);
    state.pendingSellers = state.pendingSellers.filter((entry) => entry.id !== reject.dataset.reject);
    renderOps();
    toast(`${seller ? seller.name : 'Seller'} declined. The applicant has been notified.`);
    return;
  }

  const notify = event.target.closest('[data-notify]');
  if (notify) {
    toast(notify.dataset.notify);
    return;
  }

  if (event.target.closest('[data-refresh-ops]')) {
    renderOps();
    toast('Operations desk refreshed.');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (modalRoot.innerHTML) closeModal();
    return;
  }
  if (event.target.closest('[data-save]')) return;
  const card = event.target.closest('.card[data-open]');
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    navigate(`item/${card.dataset.open}`);
  }
  const hero = event.target.closest('.hero-feature[data-open]');
  if (hero && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    navigate(`item/${hero.dataset.open}`);
  }
  if (event.target.id === 'hero-search' && event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('market')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

document.addEventListener('input', (event) => {
  if (event.target === globalSearch) {
    state.query = event.target.value;
    if (parseRoute().route !== 'browse') navigate('browse');
    else {
      const hero = document.getElementById('hero-search');
      if (hero && hero.value !== state.query) hero.value = state.query;
      updateGrid();
    }
    return;
  }
  if (event.target.id === 'hero-search') {
    state.query = event.target.value;
    if (globalSearch.value !== state.query) globalSearch.value = state.query;
    updateGrid();
    return;
  }
  if (event.target.closest('#sell-form')) {
    updateSellPreview();
    if (event.target.id === 'price') updateFee();
  }
});

document.addEventListener('change', (event) => {
  if (event.target.id === 'city-select') {
    state.city = event.target.value;
    if (parseRoute().route !== 'browse') navigate('browse');
    else updateGrid();
    return;
  }
  if (event.target.id === 'sort-select') {
    state.sort = event.target.value;
    updateGrid();
    return;
  }
  if (event.target.name === 'delivery') {
    state.checkoutDelivery = event.target.value;
    updateCheckoutTotals();
    return;
  }
  if (event.target.name === 'payment') {
    state.checkoutPayment = event.target.value;
    return;
  }
  if (event.target.id === 'photo-input') {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast('Choose an image file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      state.photoData = String(reader.result);
      const dropzone = document.getElementById('dropzone');
      if (dropzone) {
        dropzone.classList.add('has-photo');
        const old = dropzone.querySelector('img');
        if (old) old.remove();
        const img = document.createElement('img');
        img.src = state.photoData;
        img.alt = 'Your listing preview';
        dropzone.appendChild(img);
      }
      updateSellPreview();
      toast('Photo added.');
    };
    reader.readAsDataURL(file);
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'sell-form') {
    event.preventDefault();
    publishListing(event.target);
  }
});

window.addEventListener('hashchange', render);

/* boot */
render();
