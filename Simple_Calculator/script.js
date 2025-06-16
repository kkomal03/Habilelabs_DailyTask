let display=document.getElementById('inputoutput');
function append(value){
    display.value += value;
}
function clearDisplay(){
    display.value=" ";
}
function calculate(){
     display.value = eval(display.value);

}