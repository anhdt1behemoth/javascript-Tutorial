let images = document.querySelectorAll(".images img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let close = document.querySelector(".close");
let galleryImg = document.querySelector(".gallery__inner img");
let gallery = document.querySelector(".gallery");
let current = 0;

function galleryShow() {
  if (current == 0) {
    prev.classList.add('hide');
  } else {
    prev.classList.remove('hide');
  }
  galleryImg.src = images[current].src;
  gallery.classList.add("show");
}
images.forEach((item, index) => {
  item.addEventListener("click", function () {
    current = index;
    galleryImg.src = images[current].src;
    gallery.classList.add("show");
  });
});

close.addEventListener("click", function () {
  gallery.classList.remove("show");
  console.log("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
});

prev.addEventListener("click", function () {
  if (current > 0) {
    current--;
    galleryShow();
  }
});

next.addEventListener("click", function () {
  if (current < images.length - 1) {
    current++;
    galleryShow();
  }
});
