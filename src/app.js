/* eslint-disable */
import "bootstrap";
import "./style.css";

const submit = e => {
  e.preventDefault();

  const validaciones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    card: /^[0-9]{13,16}$/,
    postalCode: /^[0-9]{7}$/,
    cvc: /^[0-9]{3,4}$/,
    amount: /^[0-9]{1,10}$/,
    city: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    message: /^[a-zA-ZÀ-ÿ\s]{1,100}$/
  };

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let card = document.getElementById("card");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let postalCode = document.getElementById("postalCode");
  let message = document.getElementById("message");
  let alert = document.getElementById("alert");

  let invalidInput = "";

  if (!validaciones.name.test(firstName.value)) {
    invalidInput = true;
    console.log("name invalid");
  } else {
    console.log("name valid");
  }

  if (!validaciones.lastname.test(lastName.value)) {
    invalidInput = true;
    console.log("lastname invalid");
  } else {
    console.log("lastname valid");
  }

  if (!validaciones.card.test(card.value)) {
    invalidInput = true;
    console.log("card invalid");
  } else {
    console.log("card valid");
  }

  if (!validaciones.amount.test(amount.value)) {
    invalidInput = true;
    console.log("amount invalid");
  } else {
    console.log("amount valid");
  }

  if (!validaciones.cvc.test(cvc.value)) {
    invalidInput = true;
    console.log("cvc invalid");
  } else {
    console.log("cvc valid");
  }

  if (!validaciones.city.test(city.value)) {
    invalidInput = true;
    console.log("city invalid");
  } else {
    console.log("city valid");
  }

  if (!validaciones.postalCode.test(postalCode.value)) {
    invalidInput = true;
    console.log("postalCode invalid");
  } else {
    console.log("postalCode valid");
  }

  if (!validaciones.message.test(message.value)) {
    invalidInput = true;
    console.log("message invalid");
  } else {
    console.log("message valid");
  }

  if (invalidInput == true) {
    alert.classList.remove("displayNone");
  }
  console.log(invalidInput);
};

document.getElementById("submitButton").addEventListener("click", event => {
  event.preventDefault();
  submit(event);
});
