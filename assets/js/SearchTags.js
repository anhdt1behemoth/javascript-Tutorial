let content = document.querySelector(".content");
let input = document.querySelector(".content  input");
let btnAdd = document.querySelector(".add");
let btnRemoveAll = document.querySelector(".remove-all");
const tags = ["node.js", "Reactjs", "javascript"];

function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
        <span>${tag}</span>
        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>`;
  }
  content.appendChild(input);
  input.focus();
}

render();
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    tags.push(input.value.trim());
    input.value = "";
    render();
    //    add
  }
});

function removeTag(index) {
  tags.splice(index, 1);
  render();
}

btnAdd.addEventListener("click", function () {
  tags.push(input.value.trim());
  input.value = "";
  render();
});

btnRemoveAll.addEventListener("click", function (index) {
  tags.splice(index == 0);
  render();
});
