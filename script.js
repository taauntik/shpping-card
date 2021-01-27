const phonePrice = 1219;
const coverPrice = 59;

const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function () {
  makePlusBtn("input1", "price1", phonePrice);

  addToCard("subtotal", "total", "price1", "price2");
});

const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function () {
  const inputValue = parseInt(document.getElementById("input1").value);

  if (inputValue === 0) {
  } else {
    makeMinusBtn("input1", "price1", phonePrice);

    addToCard("subtotal", "total", "price1", "price2");
  }
});

const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function () {
  const inputValue = parseInt(document.getElementById("input2").value);

  if (inputValue === 0) {
  } else {
    makeMinusBtn("input2", "price2", coverPrice);

    addToCard("subtotal", "total", "price1", "price2");
  }
});

const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function () {
  makePlusBtn("input2", "price2", coverPrice);

  addToCard("subtotal", "total", "price1", "price2");
});

function addToCard(subtotal, total, iphonePrice, coverPrice) {
  const IphonePrice = parseInt(document.getElementById(iphonePrice).innerText);
  const CoverPrice = parseInt(document.getElementById(coverPrice).innerText);
  const totalPrice = IphonePrice + CoverPrice;
  document.getElementById(subtotal).innerText = totalPrice;
  document.getElementById(total).innerText = totalPrice;
}

function makePlusBtn(id, id2, price) {
  const input = document.getElementById(id).value;
  if (input === "0") {
    document.getElementById(id2).innerText = price;
  }
  const inputNumber = parseInt(input);
  const addValue = inputNumber + 1;
  const addToPrice = price * addValue;
  document.getElementById(id).value = addValue;
  document.getElementById(id2).innerText = addToPrice;
}

function makeMinusBtn(id, id2, price) {
  const input = document.getElementById(id).value;
  const inputNumber = parseInt(input);

  const addValue = inputNumber - 1;
  const addToPrice = price * addValue;
  document.getElementById(id).value = addValue;
  document.getElementById(id2).innerText = addToPrice;
}
