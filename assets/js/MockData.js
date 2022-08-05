fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let products = document.querySelector(".products");
    products.innerHTML = "";
    data.forEach((item) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
    <img src="${item.image}">
    <div class="info">
        <div class="name">${item.title}</div>
        <div class="price">${item.price}</div>
    </div>`;

      products.appendChild(newProduct);
    });
  });


  let searchInput = document.querySelector('.search input')
  searchInput.addEventListener('input' , function(e){
    // console.log(e.target.value);
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('products')
    listProductDOM.forEach(item => {
        if(item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
  })