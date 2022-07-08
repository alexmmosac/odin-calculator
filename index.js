//TODO: fix to where you can enter float in both num1, num2
//TODO: fix to where you can only insert neg in num1, num2.

import {add, sub, div, mul, convert_to_percent}  from './calc.js'
//create three variables.
var num1 = 0; //the first number pressed.
var num2 = 0; //the second number pressed.
var operation = '';
var dot = false;

//get elements 
const screen_display = document.getElementById("display");
const clear_key = document.getElementById("clear");
const percent_key = document.getElementById("percent_key");
const equal = document.getElementById("eqauls");
const last_operation = document.getElementById("last_display");

//set event listerns.
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
else{                   // ELSE the op key has been pressed in which this is the 2nd num. 
    if(dot == false && num == "."){
        screen_display.textContent += num;
        dot = true;
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
    num1 = 0;
    num2 = 0;
    operation = ' ';
    dot = false;
    last_operation.textContent = " ";
}
function SetOp(op){                     // Once op key is pressed update num1. set the operation and update the screen
    num1 = screen_display.textContent;
    operation = op;
    num2 = ' ';
    screen_display.textContent = `${num1} ${operation}`
}

//TODO: fix to where you can only percent 1st num.
function percent(){
screen_display.textContent = convert_to_percent(Number(screen_display.textContent));

}



function maths(){                   // logic of deciding which operation to use.    
    last_operation.textContent = `${num1} ${operation} ${num2} =`;
    dot = false;
    if(operation === '×'){
          screen_display.textContent = ' ';
          num1 = mul(Number(num1), Number(num2));
          screen_display.textContent = num1;
          num2 = '';
          
        }
        else if(operation === '-'){
            screen_display.textContent = ' ';
            num1 = sub(Number(num1), Number(num2));
            screen_display.textContent = num1;
            num2 = 0;
        }
        else if(operation === '+'){
            screen_display.textContent = ' ';
           num1  = add(Number(num1), Number(num2));
           screen_display.textContent = num1; 
           num2 = 0;
        }
        else if(operation === '÷'){
            screen_display.textContent = ' ';
           num1 = div(Number(num1), Number(num2));
           screen_display.textContent = num1; 
           num2 = 0;
        }
        else{
          return null;
        }
}