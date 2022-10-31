const btnPlus = document.getElementById("btn-add");
const btnMinus = document.getElementById("btn-subtract");
const btnTimes = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-divide");
const btnDel = document.getElementById("btn-del");
const btnEquals = document.getElementById("btn-equals");
const numBtns = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btns");
const display = document.querySelector(".display");
const clearContent = document.querySelector(".clear")


numBtns.forEach(number => number.addEventListener("click", addNumber))
operatorBtns.forEach(operator => operator.addEventListener("click", addOperator))
btnEquals.addEventListener("click", doMath)
btnDel.addEventListener("click", eraseLast)
clearContent.addEventListener("click", clear)


/*adds numbers to the display. if number on the screen is 0, then change is to whatever is typed, but if number is not zero, 
just add whatever is typed to the current display.
*/
function addNumber(e){
  let number = e.target;
  if (display.innerHTML === "0"){
    display.innerHTML = number.innerText;
  } else{
    display.innerHTML += number.innerText;
  }
  
}


/* add operators to the calculator. Split the display into an array and check if the array length is 3.

it should be 3 because index 0 is the first term, index 1 is the operator, and index 3 is the second term.
If that condition passes, then call doMath function to process the result of the given numbers. Without this, if the user clicks on another operator without 
pressing equals, the program will just calculate the first two numbers and leave the third number behind, giving a wrong answer. 
This also calls the function addOperator again when another operator is clicked.

if the index length is less than 3, then the display will just wait for another input to in order to call the doMath function

*/
function addOperator(e){
  let operator = e.target;
  let toDo = display.innerText;
  toDo = toDo.split(" ")
  
  if (toDo.length === 3){
    doMath()
    addOperator(e)
  } else{
    display.innerHTML += " " + operator.innerText + " ";
  }
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

}

// deletes the last digit on the display. Doesn't affect result because the calculator only calculates when the doMath fuction is called.
function eraseLast(){
  let text = display.innerText
  text = text.slice(0, (text.length - 1))
  display.innerText = text;
  console.log(text)
}

// deletes the content of the display and changes it to 0
function clear(){
  display.innerText = 0;
}
