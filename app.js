// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
}

// INTEREST LOAN CALCULATOR
const principalIn = document.getElementById('principal');
const principal = document.getElementById('prince');
const rateIn = document.getElementById('rate');
const interestRate = document.getElementById('intRate');
const numberOfPaymentsIn = document.getElementById('numberPay');
const numberOfPayments = document.getElementById('numOfPay');
const monthlyPayment = document.getElementById('monthlyPayment');
const completeTot = document.getElementById('completeTot');
const interestTot = document.getElementById('interestTot');
const boton = document.getElementById('boton');

// auto focus on first input
// document.getElementById(principal.id).focus();
// document.getElementById(principal.id).select();

// Tax Calculator CheckBox to hide previous results
function myFunc(checkBox) {
  const text2 = document.getElementById('text2');
  text2.style.display = checkBox.checked ? 'block' : 'none';
}

// Interest Loan Calculator Button
boton.addEventListener('click', btn2);
function btn2() {
  let principalAmount = principalIn.value;
  let interestRateAmount = rateIn.value;
  let numberOfPaymentsAmount = numberOfPaymentsIn.value;
  let decimal = rateIn.value / 100;
  let monthlyRate = decimal / 12;
  console.log(principalAmount);

  // Calculation Formula
  let monthlyPaymentAmount = (
    principalAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPaymentsAmount)) /
      (Math.pow(1 + monthlyRate, numberOfPaymentsAmount) - 1))
  ).toFixed(2);
  let completeTotalAmount = (
    monthlyPaymentAmount * numberOfPaymentsAmount
  ).toFixed(2);
  let totalInterestAmount = (completeTotalAmount - principalAmount).toFixed(2);

  const listItem1 = document.createElement('li');
  listItem1.textContent = '$ ' + principalAmount;
  principal.appendChild(listItem1);
  let theFirstChild1 = principal.firstChild;
  principal.insertBefore(listItem1, theFirstChild1);

  const listItem2 = document.createElement('li');
  listItem2.textContent = interestRateAmount + '%';
  interestRate.appendChild(listItem2);
  let theFirstChild2 = interestRate.firstChild;
  interestRate.insertBefore(listItem2, theFirstChild2);

  const listItem3 = document.createElement('li');
  listItem3.textContent = numberOfPaymentsAmount;
  numberOfPayments.appendChild(listItem3);
  let theFirstChild3 = numberOfPayments.firstChild;
  numberOfPayments.insertBefore(listItem3, theFirstChild3);

  const listItem4 = document.createElement('li');
  listItem4.textContent = '$' + monthlyPaymentAmount;
  monthlyPayment.appendChild(listItem4);
  let theFirstChild4 = monthlyPayment.firstChild;
  monthlyPayment.insertBefore(listItem4, theFirstChild4);

  const listItem5 = document.createElement('li');
  listItem5.textContent = '$' + completeTotalAmount;
  completeTot.appendChild(listItem5);
  let theFirstChild5 = completeTot.firstChild;
  completeTot.insertBefore(listItem5, theFirstChild5);

  const listItem6 = document.createElement('li');
  listItem6.textContent = '$' + totalInterestAmount;
  interestTot.appendChild(listItem6);
  let theFirstChild6 = interestTot.firstChild;
  interestTot.insertBefore(listItem6, theFirstChild6);

  if (principalAmount === '') {
    alert('Please Enter Valid Value. Current Value is Empty');
  } else {
    principalIn.value = '';
  }
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }
}
