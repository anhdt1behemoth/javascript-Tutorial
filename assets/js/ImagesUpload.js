let inputUpload = document.querySelector('#mypicture')
let preview = document.querySelector('.preview')
let error = document.querySelector('.error')

inputUpload.addEventListener('change',function(e){

    let file = inputUpload.files[0]

    if(!file) 
        return
    if(!file.name.endsWith('jpeg')){
        error.innerHTML = `File không đúng định dạng `
        return
    }
    console.log(file);

   let img = document.createElement('img')
   img.src = URL.createObjectURL(file)
   preview.appendChild(img)
})