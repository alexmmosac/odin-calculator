import {add, sub, div, mul, convert_to_percent}  from './calc.js'
var num1 = 0; //the first number pressed.
var num2 = 0; //the second number pressed.
var operation = ' '; //The operation being conducted
var dot = false;    //flag to store if number is a float

//get elements 
const screen_display = document.getElementById("display");
const clear_key = document.getElementById("clear");
const percent_key = document.getElementById("percent_key");
const equal = document.getElementById("eqauls");
const last_operation = document.getElementById("last_display");

//set event listerns.
window.addEventListener('keydown', handleKeyboardInput);        // Keyboard stuff
const num_keys = document.getElementsByClassName("number_keys");
var num_keys_arry = Array.prototype.slice.call(num_keys);
num_keys_arry.forEach(element => {
    element.addEventListener('click', () => AppendtoScreen(element.textContent));
});

const op_keys = document.getElementsByClassName("op_keys");
var op_keys_arry = Array.prototype.slice.call(op_keys);
op_keys_arry.forEach(element => {
    element.addEventListener('click', () => SetOp(element.textContent));
});

 clear_key.addEventListener('click', () => ResetAll());

if(screen_display.textContent != " " ){
    percent_key.addEventListener('click', () => percent());
}
equal.addEventListener('click',  maths);


function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9 || e.key == '.') {
        AppendtoScreen(e.key);
    }
    if (e.key === '=' || e.key === 'Enter'){
     maths();
    }
    if (e.key === 'Escape') {
        ResetAll()
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
      SetOp(convertOperator(e.key));
    }
}
function convertOperator(keyboardOperator) {
        if (keyboardOperator === '/') {
            return '÷';
        }
        if (keyboardOperator === '*') {
            return '×';
        }
        if (keyboardOperator === '-'){
            return '−';
        }
        if (keyboardOperator === '+'){
            return '+';
        }
      }


// If user clicks number  -> that number gets sent to the screen. 
function AppendtoScreen(num){
if(operation == null){         // if the op key has not been pressed yet then it'll all be in num1. 
    if(dot == false && num == "."){
        screen_display.textContent += num;
        dot = true;
    }
    else if(num != "."){
    screen_display.textContent += num;
    }
    else{
        console.log("Can't enter that here");
    }
}
else{
    if(dot == false && num == "."){
        screen_display.textContent += num;
        dot = true;
        num2 += num;
    }
    else if(num != "."){
        num2 += num;
        screen_display.textContent += num;
    }
    else{
        console.log("Can't enter that here");
    }
 
}
}

function ResetAll(){                        // This will reset everythin num1, num2, and the screen
    screen_display.textContent = " ";
    num1 = '';
    num2 = '';
    operation = ' ';
    dot = false;
    last_operation.textContent = " ";
}
function SetOp(op){
    if(num1 != '' && num2 != '' && operation != ' ' ){
        maths();
        operation = op;
        num2 = ' ';
        dot = false;
        screen_display.textContent = `${num1} ${operation}`;
    }
    else{
    num1 = screen_display.textContent;
    operation = op;
    num2 = ' ';
    dot = false;
    screen_display.textContent = `${num1} ${operation}`
    }
}


function percent(){
if(operation == ' '){
dot = true;
screen_display.textContent = convert_to_percent(Number(screen_display.textContent));
}
}



function maths(){                   // logic of deciding which operation to use.    
    last_operation.textContent = `${num1} ${operation} ${num2} =`;
    dot = false;
    if(operation === '×'){
          screen_display.textContent = ' ';
          num1 = mul(Number(num1), Number(num2));
          if(num1 == Error){
            screen_display.textContent = "Error Can't multiply";
          }
          else{
          screen_display.textContent = num1;
          num2 = '';
          }
        }
        else if(operation === '-'){
            screen_display.textContent = ' ';
            num1 = sub(Number(num1), Number(num2));
           if(num1 == Error){
            screen_display.textContent = "Error Can't Subtract";
           }
           else{
            screen_display.textContent = num1;
            num2 = 0;
           }
        }
        else if(operation === '+'){
            screen_display.textContent = ' ';
           num1  = add(Number(num1), Number(num2));
           if(num1 == Error){
            screen_display.textContent = "Error Can't Add";
           }
           else{
           screen_display.textContent = num1; 
           num2 = 0;
           }
        }
        else if(operation === '÷'){
            screen_display.textContent = ' ';
           num1 = div(Number(num1), Number(num2));
           if(num1 == Error){
            screen_display.textContent = "Error Cant Divide";
           }
           else{
           screen_display.textContent = num1; 
           num2 = 0;
           }
        }
        else{
          return null;
        }
}