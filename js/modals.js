var link = document.querySelector(".address .button");

var popup = document.querySelector(".feedback-modal");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStarageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");

  if (storage) {
    login.value = storage;
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt){
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввусти логин и почту");
  } else {
    if (isStorageSupport){
      localStorage.setItem("name", login.value)
    }
  }
});

window.addEventListener("keydown", function (evt){
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error")
    }
  }
})