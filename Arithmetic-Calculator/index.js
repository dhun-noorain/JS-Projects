const field = document.getElementById("field");
const equalsBtn = document.getElementById("equalsBtn");
const display = document.getElementById("display");

function init() {
  const table = document.getElementById("cal");
  
  table.addEventListener("click", getBtnClicked, false);
  equalsBtn.addEventListener("click", getResult, false);
}

// gets the button clicked within the table tag and display it on the input field
function getBtnClicked(el) {
  let btn = el.target;
  if (btn.classList.contains("btn")) {
    let value = btn.textContent;
    if (value != "C" && value != "=") {
      field.value += value;
    } else if (value == "C") {
      field.value = "";
      display.innerText = "";
    }
  }
}

// gets the input field content and perform operations
function getResult() {
  let data = field.value.trim();
  if (data.length > 0) {
    let result = fnum = snum = operator = 0;
    let dataLen = data.length;
    let temp = data;
    temp = temp.split(" ");

    for(let index = 0; index < dataLen; ++index) {
      for (let inner = 0; inner < temp.length; ++inner) {
        if (temp.includes("/")) {
          if (temp[inner] == "/") {
            operator = temp[inner];
            fnum = temp.slice(inner - 1, inner);
            snum = temp.slice(inner + 1, inner + 2);
  
            result = parseFloat(fnum) / parseFloat(snum);
            temp.splice(inner - 1, 3, result);
            break;
          }
        } else if (temp.includes("x")) {
          if (temp[inner] == "x") {
            operator = temp[inner];
            fnum = temp.slice(inner - 1, inner);
            snum = temp.slice(inner + 1, inner + 2);
  
            result = parseFloat(fnum) * parseFloat(snum);
            temp.splice(inner - 1, 3, result);
            break;
          }
        } else if (temp.includes("+")) {
          if (temp[inner] == "+") {
            operator = temp[inner];
            fnum = temp.slice(inner - 1, inner);
            snum = temp.slice(inner + 1, inner + 2);
  
            result = parseFloat(fnum) + parseFloat(snum);
            temp.splice(inner - 1, 3, result);
            break;
          }
        } else if (temp.includes("-")) {
          if (temp[inner] == "-") {
            operator = temp[inner];
            fnum = temp.slice(inner - 1, inner);
            snum = temp.slice(inner + 1, inner + 2);
  
            result = parseFloat(fnum) - parseFloat(snum);
            temp.splice(inner - 1, 3, result);
            break;
          }
        }
      }
      if (temp.length == 1)
        break;
    }
    display.innerText = " = " + result.toFixed(1);
  }
}

document.addEventListener("DOMContentLoaded", init, false);