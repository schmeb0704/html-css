const btnPlus = document.getElementById("btn-add");
const btnMinus = document.getElementById("btn-subtract");
const btnTimes = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-divide");
const btnDel = document.getElementById("btn-del");
const btnEquals = document.getElementById("btn-equals");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btns");
const display = document.querySelector(".display");


numBtns.forEach(number => number.addEventListener("click", addNumber))
operatorBtns.forEach(operator => operator.addEventListener("click", addOperator))
btnEquals.addEventListener("click", doMath)


function addNumber(e){
  let number = e.target;
  display.innerHTML += number.innerText;
}

function addOperator(e){
  let operator = e.target;
  display.innerHTML += " " + operator.innerText + " "; 
}

function doMath(){
  let toDo = display.innerText;
  toDo = toDo.split(" ")
  let firstTerm = parseInt(toDo[0]);
  let secondTerm = parseInt(toDo[2]);
  let operation = toDo[1];
  let result = 0;

  if (operation === "+"){
    result = firstTerm + secondTerm
  } else if (operation === "-"){
    result = firstTerm - secondTerm
  } else if (operation === "x"){
    result = firstTerm * secondTerm
  } else if (operation === "/"){
    result = firstTerm / secondTerm
  }

  display.innerHTML = result


  console.log(toDo)
}