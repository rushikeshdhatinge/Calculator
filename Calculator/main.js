const display = document.getElementById("display");

function appendToDisplay (input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
var a = display.value.length - 1;
var b = display.value.length
function back(){
display.value = display.value.slice(0,a);
}
 

