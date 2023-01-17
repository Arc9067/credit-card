const inputNumber = document.querySelector("#input-number");
const cardNumber = document.querySelector("#card-number-txt");
const inputfname = document.querySelector("#fnameinput");
const fnametxt = document.querySelector(".fnametxt");
const inputlName = document.querySelector("#lnameinput");
const lnametxt = document.querySelector(".lnametxt");
const next = document.querySelector("#next");
const submitbtn = document.querySelector("#submit");
const mandate1 = document.querySelector(".mandate1");
const mandate2 = document.querySelector(".mandate2");
const allInput = document.querySelectorAll("input");
const back = document.querySelector("#back");
const date = document.querySelector("#expiry-date");
const cardmonth = document.querySelector("#month");
const cardyear = document.querySelector("#year");
const success = document.querySelector(".success");
const danger = document.querySelector(".danger");
const option = document.querySelector("#select");
var visa = document.querySelector(".visa");
var master = document.querySelector(".master");
const cardPin = document.querySelector("#cardpin");
const allBtn = document.querySelectorAll("button");
const card2number = document.querySelector(".cardlnumber");
const card2pin = document.querySelector(".card2pin");
const pname = document.querySelector("#person");
const formMain = document.querySelector("#form");
const sbtns = document.querySelector(".sbtns");
const card1 = document.querySelectorAll(".card");
const card2 = document.querySelector(".card2");

let pbname;
let checkCard;
let cardcNumber;

inputNumber.addEventListener("input", () => {
  var check = cardNumber.textContent;

  if (check.length <= 15) {
    cardNumber.textContent = inputNumber.value;
  } else {
    cardNumber.textContent = check.slice(0, 16);
    inputNumber.value = cardNumber.textContent;
    inputNumber.readOnly = true;
    success.textContent = "card number updated";
    success.style.display = "block";
    cardcNumber = cardNumber.textContent;
    setTimeout(() => {
      success.style.display = "none";
    }, 2000);
  }
});

cardNumber.addEventListener("onpropertychange", () => {
  console.log(cardNumber.textContent.length);
  if ((cardNumber.textContent.length = 0)) {
    cardNumber.textContent = "0000000000000000";
  }
});

inputfname.addEventListener("input", () => {
  if (inputfname.value != "") {
    fnametxt.textContent = inputfname.value;
  } else {
    fnametxt.textContent = "full";
    danger.textContent = "pls first name";
    danger.style.display = "block";
    setTimeout(() => {
      danger.style.display = "none";
    }, 2000);
  }
});

inputlName.addEventListener("input", () => {
  var lastnameinput = lnametxt.textContent;
  if (inputlName.value != "") {
    lnametxt.textContent = inputlName.value;
  } else {
    lnametxt.textContent = "Name";
    danger.textContent = "pls last name";
    danger.style.display = "block";
    setTimeout(() => {
      danger.style.display = "none";
    }, 2000);
  }
});
cardPin.addEventListener("input", () => {
  checkCard = cardPin.value;
  console.log(checkCard);
});

next.addEventListener("click", () => {
  if (
    inputNumber.value != "" &&
    inputlName.value != "" &&
    inputfname.value != ""
  ) {
    mandate1.style.display = "none";
    mandate2.style.display = "block";
    back.style.display = "block";
    var mainDate = new Date(date.value);
    next.style.display = "none";
    var day = mainDate.getDate();
    var month = mainDate.getMonth() + 1;
    var year = mainDate.getFullYear();
    cardmonth.textContent = month;
    cardyear.textContent = year;
    submitbtn.style.display = "block";
    cardcNumber = cardNumber.textContent;
    pbname = `mr ` + fnametxt.textContent;
  } else {
    danger.textContent = "pls fill this field";
    danger.style.display = "block";
    setTimeout(() => {
      danger.style.display = "none";
    }, 2000);
  }
});

back.addEventListener("click", () => {
  mandate1.style.display = "block";
  mandate2.style.display = "none";
  next.textContent = "next";
  back.style.display = "none";
  next.style.display = "block";
  submitbtn.style.display = "none";
});

submitbtn.addEventListener("click", () => {
  // console.log(checkCard)
  // console.log(`cardcNumber ${cardcNumber}`)
  card2number.textContent = cardcNumber;
  card2pin.textContent = checkCard;
  pname.textContent = pbname;
  formMain.style.display = "none";
  sbtns.style.display = "none";
  card2.style.display = "block";
  card1.forEach((ele) => {
    ele.style.position = "relative";
  });
});

option.addEventListener("change", (e) => {
  if ((e.value = "master")) {
    visa.style.display = "none";
    master.style.display = "block !important";
  }
});
