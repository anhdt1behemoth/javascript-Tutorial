let btnSuccess = document.querySelector(".control .success");
let btnWarning = document.querySelector(".control .warning");
let btnError = document.querySelector(".control .error");

btnSuccess.addEventListener("click", function () {
  createToast("success");
});

btnWarning.addEventListener("click", function () {
  createToast("warning");
});

btnError.addEventListener("click", function () {
  createToast("error");
});


function createToast(status) {
  let templateInner = `<i class="fa-solid fa-circle-check"></i>
    <span class="message">This is Success message</span>`;

  switch (status) {
    case "succes":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
    <span class="message">This is Success message</span>`;
      break;
    case "warning":
      templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
    <span class="message">This is Warning message</span>`;
      break;
    case "error":
      templateInner = `<i class="fa-solid fa-circle-xmark"></i>
    <span class="message">This is Error message</span>`;
      break;
  }

  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
    <span class="countdown"></span>`;

  let toastList = document.getElementById("toasts");
  toastList.appendChild(toast);
setTimeout(function(){
    toast.style.animation = 'slide_hide 2s ease forwards'
},4000)
setTimeout(function(){
    toast.remove()
},6000)
}


