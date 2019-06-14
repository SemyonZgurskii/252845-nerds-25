
var write = document.querySelector(".location-info-button");
var writeForm = document.querySelector(".write-us-form");
var writeClose = writeForm.querySelector(".form-button-close");
var writeName = writeForm.querySelector("[name=username]");
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
    writeName.value = storageName;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.remove("write-form-show");
  writeForm.classList.remove("write-form-error")
  writeName.classList.remove("form-input-animation");
  writeEmail.classList.remove("form-input-animation");
});

writeName.onfocus = function() {
  if (writeName.classList.contains("form-input-animation")) {
    writeName.classList.remove("form-input-animation");
  }
};

writeEmail.onfocus = function() {
  if (writeEmail.classList.contains("form-input-animation")) {
    writeEmail.classList.remove("form-input-animation");
  }
};

writeForm.addEventListener("submit", function(evt) {
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();
    writeForm.classList.remove("write-form-error")
    writeForm.offsetWidth = writeForm.offsetWidth;
    writeForm.classList.add("write-form-error")
    console.log("Нужно ввести логи и пароль");
      if(!writeName.value) {
        writeName.classList.remove("form-input-animation");
        writeName.offsetWidth = writeName.offsetWidth;
        writeName.classList.add("form-input-animation");
      } if (!writeEmail.value) {
        writeEmail.classList.remove("form-input-animation");
        writeEmail.offsetWidth = writeEmail.offsetWidth;
        writeEmail.classList.add("form-input-animation");
      }
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
      writeForm.classList.remove("write-form-error")
      writeName.classList.remove("form-input-animation");
      writeEmail.classList.remove("form-input-animation");
    }
  }
});
