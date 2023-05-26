//This code is for the responsive headder
function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :(e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

//This code is for the calculator to function correctly

//Function To Display Values On screen
function dis(value) {
    document.getElementById("screen").value += value;
}

// Function For Evaluation
function solve() {
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}

//Function For clearing the screen
function clr() {
    document.getElementById("screen").value = ""
}

//backspacing
function backspace() {
   let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}

//To Enlarge image
function change(element) {
    element.classList.toggle("fullsize");
}

