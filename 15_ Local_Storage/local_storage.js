const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const clearAllBtn = document.querySelector('.clear-all');
const checkAllBtn = document.querySelector('.check-all');
const uncheckAllBtn = document.querySelector('.uncheck-all');
let items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(plates = [], plastesList) {
  const html = plates
    .map(
      (plate, i) => `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      }/>
      <label for="item${i}">${plate.text}</label>
      </li>
    `
    )
    .join('');

  plastesList.innerHTML = html;
}

function addItem(e) {
  e.preventDefault();
  const text = e.currentTarget.item.value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  e.target.reset();
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const { index } = el.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll() {
  localStorage.clear();
  items = [];
  populateList(items, itemsList);
}

function toggleAll(value) {
  items.map(item => (item.done = value));
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAllBtn.addEventListener('click', clearAll);
checkAllBtn.addEventListener('click', () => toggleAll(true));
uncheckAllBtn.addEventListener('click', () => toggleAll(false));
populateList(items, itemsList);
