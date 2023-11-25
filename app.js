const toDoInputEl = document.querySelector('.todo__input');
const toDoListEl = document.querySelector('.todo__list');
const toDoItemEls = document.querySelectorAll('.todo__item');

function addListItem(){
    toDoInputEl.addEventListener("keypress", function(event){
    if(event.keyCode === 13) {
        const newListItem = createListItem(toDoInputEl.value)
        // toDoListEl.appendChild(newListItem)
        toDoListEl.insertBefore(newListItem, toDoListEl.childNodes[0])
        toDoInputEl.value = "";
    }
    })
}

function toggleDone(){
   toDoListEl.addEventListener("click", function(event){
    if(event.target.classList.contains("todo__item")){
        event.target.classList.toggle("done");
    }
   })
}

// function toggleDone(){
//     for (let elem of todoItemEls){
//         elem.addEventListener("click", function(){
//             elem.classList.toggle("done");
//         })
//     }}


function createListItem(text){
    const newListElement = document.createElement("li");
    newListElement.textContent = text;
    newListElement.setAttribute("class", "todo__item");
    return newListElement;
}

toggleDone()
addListItem()