"use strict"

var sucheButton = document.getElementById("enter");
var eingabe = document.getElementById("eingabe");
var ul = document.querySelector("ul");

function inputLength() {
    return eingabe.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(eingabe.value));
    ul.appendChild(li);
    eingabe.value = "";
    
    function crossOut(){
        li.classList.toggle("done");
        
    }
    
    li.addEventListener("click", crossOut);
    
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    
    dBtn.addEventListener("click", deleteListItem);
    
    function deleteListItem(){
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
    
}

function addListAfterKeypress(event) {
    if (inputLength() >0 && event.which === 13){
        createListElement();
    }
}

sucheButton.addEventListener("click", addListAfterClick);

eingabe.addEventListener("keypress", addListAfterKeypress);
