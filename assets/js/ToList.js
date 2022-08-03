let inputForm = document.querySelector('.form-add input')
let btnAdd = document.querySelector('.btn-control')

btnAdd.addEventListener('click' , function(){
   inputForm.value.trim()
  inputForm.value = ""
})

