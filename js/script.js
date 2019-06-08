
var write = document.querySelector(".location-info-button");
var writeForm = document.querySelector(".write-us-form");
var writeClose = writeForm.querySelector(".form-button-close");
var writeName = writeForm.querySelector("[name=name]");
var writeEmail = writeForm.querySelector("[name=email]");

var storageName = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("writeName");
} catch (err) {
  isStorageSupport = false;      
}

write.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.add("write-form-show");
  if (storageName) {
    writeName = storageName;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.remove("write-form-show");
});

writeForm.addEventListener("submit", function(evt) {
  if (!writeName.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логи и пароль");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("writeName", writeName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeForm.classList.contains("write-form-show")) {
      evt.preventDefault();
      writeForm.classList.remove("write-form-show");
    }
  }
});
