let display=document.getElementById('inputoutput');
function append(value){
    display.value += value;
}
function clearDisplay(){
    display.value=" ";
}
// function calculate(){
//      display.value = eval(display.value);

// }


function  deleteButton(){
    display.value=display.value.substr(0, -1);

}



document.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        calculate();
    }else if(event.key === "Backspace"){
        deleteButton();
    }
});
function calculate(){
    try{
        if(display.value.includes("/0")){
            alert("cannot divide by zero");
            clearDisplay();
        }else{
            display.value=eval(display.value);
        }
    }catch(error){
        alert("invalid")
        clearDisplay();
    }
}
