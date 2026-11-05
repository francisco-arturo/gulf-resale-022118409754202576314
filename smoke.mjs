import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const elements = new Map();
function element(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      id,
      innerHTML: '',
      value: '',
      textContent: '',
      hidden: false,
      dataset: {},
      style: {},
      classList: { add() {}, remove() {}, toggle() {} },
      setAttribute() {},
      removeAttribute() {},
      focus() {},
      querySelector() { return null; },
      querySelectorAll() { return []; }
    });
  }
  return elements.get(id);
}

const document = {
  title: '',
  body: { classList: { add() {}, remove() {}, toggle() {} } },
  getElementById: element,
  querySelector() { return null; },
  querySelectorAll() { return []; },
  addEventListener() {},
  createElement() { return element(`created-${Math.random()}`); }
};
const context = {
  document,
  window: { addEventListener() {}, scrollTo() {} },
  location: { hash: '#/browse' },
  CSS: { escape: (value) => value },
  console,
  setTimeout,
  clearTimeout,
  Date,
  Math,
  Number,
  String,
  Array,
  Boolean,
  Set,
  Map,
  JSON,
  RegExp,
  Error
};

const source = readFileSync('app.js', 'utf8') + `
globalThis.__api = { renderItem, renderSell, renderOps, renderOrders, openCheckout, createOrder, showSuccess, confirmOrder, filteredListings, state };
`;
runInNewContext(source, context, { filename: 'app.js' });
const api = context.__api;

function assert(label, condition) {
  if (!condition) throw new Error(`FAIL ${label}`);
  console.log(`ok ${label}`);
}

api.renderItem('chair');
assert('detail renders protection and buy action', element('view').innerHTML.includes('Buy with escrow') && element('view').innerHTML.includes('Thanya buyer protection'));

api.renderSell();
assert('sell renders the composer', element('view').innerHTML.includes('Publish listing') && element('view').innerHTML.includes('Live preview'));

api.renderOps();
assert('ops renders queue and ledger', element('view').innerHTML.includes('Seller verification') && element('view').innerHTML.includes('Escrow transactions'));

api.renderOrders();
assert('orders render the release action', element('view').innerHTML.includes('Confirm delivery and release escrow'));

api.openCheckout('chair');
assert('checkout renders with escrow total', element('modal-root').innerHTML.includes('Pay SAR 1,275 into escrow') && element('modal-root').innerHTML.includes('Delivery address'));

const item = api.state.listings.find((entry) => entry.id === 'chair');
const order = api.createOrder(item);
api.showSuccess(order, item);
assert('success renders the held amount and order', element('modal-root').innerHTML.includes('Your money is safe.') && element('modal-root').innerHTML.includes('held by Thanya'));

api.state.orders.unshift(order);
context.location.hash = '#/orders';
api.renderOrders();
assert('new escrow order joins the order list', element('view').innerHTML.includes(order.id) && element('view').innerHTML.includes('In escrow'));

api.confirmOrder('TH-2481');
assert('seeded transit order can be released', api.state.orders.find((entry) => entry.id === 'TH-2481').status === 'delivered');

assert('filters narrow the market', api.filteredListings().length === 9);
api.state.category = 'Furniture';
assert('category filter works', api.filteredListings().every((entry) => entry.category === 'Furniture'));
api.state.category = 'All';
api.state.query = 'camera';
assert('search finds a listing', api.filteredListings().length >= 1 && api.filteredListings()[0].id === 'camera');

console.log('\nSMOKE PASS');
