let inputForm = document.querySelector('input')
let btnAdd = document.querySelector('button')
let form = document.querySelector('form')
let todos = document.querySelector('.todos')

let del = document.querySelector('.btn-control')
form.addEventListener('submit', function(e){
  e.preventDefault()
  let val =  inputForm.value.trim()
  if(val){
   addTodo({
      text: val,
   })
  }
  inputForm.value = ''
})

function addTodo(todo) {
   var li = document.createElement('li')
   li.innerHTML = `
   <span>${todo.text}</span>
   <i class="fa-solid fa-trash"></i>`

   if(todo.status === 'completed'){
      li.setAttribute('class', 'completed')
   }

   li.addEventListener('click', function(){
    
      this.classList.toggle('completed')
   })

   li.querySelector('i').addEventListener('click', function(){
      this.parentElement.remove()
   })
   todos.appendChild(li)

}

function saveTodolist(){
  let todoList = document.querySelectorAll('li')
  let todoStorage = []
   todoList.forEach(function(item){
      let text = item.querySelector('span').innerText
      let status = item.querySelector('span').getAttribute('class')

      todoStorage.push( {
         text,
         status
      })
   })
   localStorage.setItem('todoList', JSON.stringify(todoStorage))
}

// function init(){
//    let data = JSON.parse(localStorage.getItem('todolist'))
//    data.forEach(function(item){
//       addTodo(item)
//    })
// }

// init()