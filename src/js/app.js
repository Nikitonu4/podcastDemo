import { isValid, createModal } from "./utils";
import { Question } from "./question";
import { getAuthForm, authWithEmailAndPassword } from "./auth";
import "../css/styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#question-input");
const submitBtn = form.querySelector("#submit");
const modalBtn = document.querySelector("#modal-btn");

window.addEventListener("load", Question.renderList);
form.addEventListener("submit", submitFormHander);
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
});
modalBtn.addEventListener("click", openModal);
function submitFormHander(e) {
  e.preventDefault();
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON(),
    };
    // Async requst to server to save the question

    submitBtn.disabled = true;
    Question.create(question).then(() => {
      input.value = "";
      input.className = "";
      submitBtn.disabled = false;
    });
  }
}

function openModal() {
  createModal("Авторзация", getAuthForm());
  document
    .getElementById("auth-form")
    .addEventListener("submit", authFormHandler, { once: true });
}

function authFormHandler(e) {
  e.preventDefault();
  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;
  authWithEmailAndPassword(email, password);
}
