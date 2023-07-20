let addToDoButton = document.getElementById('AddToDoList');
let ToDoContainer = document.getElementById('todoContainer');
let deleteButton = document.getElementById('deleteTask');
let inputField=document.getElementById('inputField');


addToDoButton.addEventListener('click',function (){
    var paragraph= document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    })
})
