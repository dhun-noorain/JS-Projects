const form = document.querySelector("#addForm");
const inputField = document.querySelector("#inputField");
const fieldBorder = window.getComputedStyle(inputField).border;
const listGroup = document.querySelector(".list-group");
const msg = document.querySelector("#msg");


function init () {
  form.addEventListener("submit", addItem, false);
  listGroup.addEventListener("click", removeItem, false);
  checkLength();
}

function checkLength () {
  if (listGroup.children.length == 0) {
    msg.textContent = "No items added!";
  } else {
    msg.textContent = "";
  }
}

function addItem (event) {
  event.preventDefault();
  if (inputField.value.trim() == "") {
    inputField.style.border = ".05rem solid red";
  } else {
    inputField.style.border = fieldBorder;
    let inputValue = inputField.value;
    
    //create new li element
    let newListItem = document.createElement("li");
    newListItem.className = "list-group-item";
    let newSpan = document.createElement("span");
    newSpan.textContent = inputValue;
    newSpan.className = "text-warning text-capitalize";
    let newBtn = document.createElement("button");
    newBtn.textContent = "Delete";
    newBtn.className = "btn btn-danger float-right del";

    newListItem.appendChild(newSpan);
    newListItem.appendChild(newBtn);

    listGroup.appendChild(newListItem);
  }
  checkLength();
  inputField.value = "";
}

function removeItem (event) {
  let item = event.target;
  if (item.classList.contains("del")) {
    listGroup.removeChild(item.parentNode);
  }
  checkLength();
}

document.addEventListener("DOMContentLoaded", init, false);