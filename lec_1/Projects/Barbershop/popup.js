var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

// Make sure that localStorage exists
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

// open popup
link.addEventListener("click", function (evt) {
    evt.preventDefault(); // Cancel default action
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus(); // focus fild login in popup
        } else {
        login.focus(); // focus fild login in popup
    }
});
// close popup
close.addEventListener("click", function (evt) {
    evt.preventDefault(); // Cancel default action
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
// 
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    } 
});

// Close the modal window by ESC
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) { // Only respond to the ESC key
        evt.preventDefault(); // Cancel default action
        // Closing the modal window
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    } 
});
