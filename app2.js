// TAX CALCULATOR
const numberIn = document.getElementById('number');
const beforeList = document.getElementById('before');
const inBetweenList = document.getElementById('between');
const afterList = document.getElementById('after');
const button = document.getElementById('button');
// percentage input
const percentageIn = document.getElementById('percentage');
const prt = document.getElementById('prt');

// auto focus on first input
// document.getElementById(number.id).focus();
// document.getElementById(number.id).select();

// //sample arrays
// let taxCalcs = [];
// console.log(taxCalcs);

// Tax Calculator CheckBox to hide previous results
function myFunction(checkBox) {
  const text = document.getElementById('text');
  text.style.display = checkBox.checked ? 'block' : 'none';
}

registerSW();

// Tax Calculator Button
button.addEventListener('click', btn);
function btn() {
  // Mathematical Calculations
  let totals = '$ ' + numberIn.value;
  let between = percentageIn.value / 100;
  let perCentAge = percentageIn.value / 100 + 1;
  let pRt = percentageIn.value + ' %';
  console.log(totals);
  const btw = '$ ' + (numberIn.value * between).toFixed(2);
  const aft = '$ ' + (numberIn.value * perCentAge).toFixed(2);

  // Creating List Items
  const listItem = document.createElement('li');
  listItem.textContent = totals;
  beforeList.appendChild(listItem);
  let theFirstChild1 = beforeList.firstChild;
  beforeList.insertBefore(listItem, theFirstChild1);

  const listItem2 = document.createElement('li');
  listItem2.textContent = btw;
  inBetweenList.appendChild(listItem2);
  let theFirstChild2 = inBetweenList.firstChild;
  inBetweenList.insertBefore(listItem2, theFirstChild2);

  const listItem3 = document.createElement('li');
  listItem3.textContent = pRt;
  prt.appendChild(listItem3);
  let theFirstChild3 = prt.firstChild;
  prt.insertBefore(listItem3, theFirstChild3);

  const listItem4 = document.createElement('li');
  listItem4.textContent = aft;
  afterList.appendChild(listItem4);
  let theFirstChild4 = afterList.firstChild;
  afterList.insertBefore(listItem4, theFirstChild4);

  if (totals === '') {
    alert('Please Enter Valid Value. Current Value is Empty');
  } else {
    numberIn.value = '';
  }
}
