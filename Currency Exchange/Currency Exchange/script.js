currencyFrom = document.getElementById("currencyFrom");
currencyTo = document.getElementById("currencyTo");
amount = document.getElementById("currencyAmount");
exchangedValue = document.getElementById("ExchangeValue");
covnertBtn = document.getElementById("convertBtn");
amountError = document.getElementById("amountError");
countryFromError = document.getElementById("countryFrom");
countryToError = document.getElementById("countryTo");
oneCurrencyValue = document.getElementById("oneCurrencyValue");
swapButton = document.getElementById('swapbtn');
// Creating Global Variable for getting Value
let enteredAmount, currFrom, currTo;

// Sending Request to Json File For Getting Country Data
const myReq = new XMLHttpRequest();
myReq.open("GET", "final.json");
myReq.send();

myReq.onload = () => {
  if (myReq.status === 200) {
    const codeListArray = JSON.parse(myReq.responseText);
    codeListArray.forEach((country) => {
      countryCode = Object.values(country)[0].code;
      countryName = Object.values(country)[0].name;
      // console.log(Object.values(country)[0].code);
      currencyTo.insertAdjacentHTML(
        "beforeend",
        `<option value="${countryCode}">
        
        ${countryCode} - ${countryName}</option>`
      );
      currencyFrom.insertAdjacentHTML(
        "beforeend",
        `<option value="${countryCode}">${countryCode} - ${countryName}</option>`
      );
    });
  }
};

// Checking Error
function checkError(amountTag, currencyFromTag, currencyToTag) {
  // removing previous Value
  exchangedValue.innerHTML = "";

  let hasError = false;

  enteredAmount = amountTag.value;
  currFrom = currencyFromTag.value;
  currTo = currencyToTag.value;
  console.log(enteredAmount, currFrom, currTo);

  if (enteredAmount < 1) {
    hasError = true;
    amountError.innerHTML = "Enter Valid Amount";
  } else {
    amountError.innerHTML = "";
  }

  if (currFrom == "Select Country") {
    hasError = true;
    countryFromError.innerHTML = "Please Select Country";
  } else {
    countryFromError.innerHTML = "";
  }

  if (currTo == "Select Country") {
    hasError = true;
    countryToError.innerHTML = "Please Select Country";
  } else {
    countryToError.innerHTML = "";
  }

  amount.addEventListener("change", function () {
    checkError(amount, currencyFrom, currencyTo);
  });

  currencyFrom.addEventListener("change", function () {
    checkError(amount, currencyFrom, currencyTo);
  });

  currencyTo.addEventListener("change", function () {
    checkError(amount, currencyFrom, currencyTo);
  });

  return hasError;
}

// calculating Currency

function calculateCurrency() {
  if (checkError(amount, currencyFrom, currencyTo)) return;

  reqCurrFrom = new XMLHttpRequest();
  reqCurrFrom.open(
    "GET",
    ` https://v6.exchangerate-api.com/v6/22e585c60aa625005d19ddea/latest/${currFrom}`
  );
  reqCurrFrom.send();

  reqCurrFrom.onload = () => {
    if (reqCurrFrom.status === 200) {
      let currRates = JSON.parse(reqCurrFrom.responseText);
      console.log(currRates);

      currRateTo = currRates.conversion_rates[currTo];
      console.log(currRateTo);

      console.log(enteredAmount);
      finalAmount = (currRateTo * enteredAmount).toFixed(2);
      console.log(finalAmount);
      exchangedValue.innerHTML = `${finalAmount}&nbsp${currTo}`;
    }
    oneCurrencyValue.innerHTML = ` 1 ${currFrom} =  ${currRateTo}&nbsp ${currTo}`;
  };

  currencyTo.addEventListener("change", calculateCurrency);
  amount.addEventListener("change", calculateCurrency);
  currencyFrom.addEventListener("change", calculateCurrency);
  swapButton.addEventListener("click", calculateCurrency);
}

// Convert Button

convertBtn.addEventListener("click", calculateCurrency);

// Swap Button;

swapButton.addEventListener('click', function () {
  let tempT, tempF;

  tempF = currencyFrom.value
  tempT = currencyTo.value;

  console.log(tempF, tempT);

  currencyFrom.value = tempT;


  currencyTo.value = tempF;

})