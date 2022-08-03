let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let form = document.querySelector("form");

function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");

  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(list) {
  let isEmptyError = false;
  list.forEach(input => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Khong duoc de trong");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
input.value = input.value.trim()

let isEmailError = !regexEmail.test(input.value)
  if(regexEmail.test(input)) {
    showSuccess(input)
  }else{
    showError(input, 'Email Invalid')
  }
  return isEmailError
}


function checkLengthError(input, min , max) {
  input.value = input.value.trim()
  if(input.value.length < min){
    showError(input, `phai co it nhat ${min} ky tu`)
    return true
  }if(input.value.length > max){
    showError(input, `khong duoc qua ${max} ky tu`)
    return true
  }

  showSuccess(input)
  return false

}

function checkMatchPassword(passwordInput, cfPasswordInput){
  if(passwordInput.value !== cfPasswordInput.value){
  showError(cfPasswordInput, 'MK khong trung khop')
  return true
  }
  return false
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
  let isEmailError = checkEmail(email)
  let isUserNameLengthError = checkLengthError(username, 3, 15)
  let isPasswordLengthError = checkLengthError(password, 6 ,20)

  let isMatchError = checkMatchPassword(password, confirmPassword)

  if(isEmailError|| isEmptyError || isUserNameLengthError || isPasswordLengthError ||isMatchError) {
    
  }else {
    
  }
});
