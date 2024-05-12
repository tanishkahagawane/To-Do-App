const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");
console.log(inputBox , listContainer)

function addTask(){
    if(inputBox.value === '' ){
        alert("Ypu must write something !");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        console.log(listContainer);

        //delete icon
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        console.log(e.target.classList)
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false)
//false here represnts - A Boolean value indicating whether to use event capturing (true) or event bubbling (false). This parameter is optional, and its default value is false.


/*
e: This typically refers to an event object passed to an event handler function. In this context, e represents an event.
target: This property of the event object refers to the HTML element that triggered the event.
classList: This property of an HTML element represents a live collection of all the classes contained in the element. It provides methods to add, remove, toggle, and check for the presence of classes.
toggle: This is a method of the classList property. It toggles the presence of a specified class in the classList. If the class is present, it removes it, and if it's absent, it adds it.
tagName: is a property in JavaScript that is commonly used to get the tag name of an HTML element. It returns the tag name of the element in uppercase letters.
parentElement: Refers to the parent element of the target element.
remove(): A method used to remove the element from the DOM 
*/


//TO SAVE DATA IN SESION

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    console.log(localStorage)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();