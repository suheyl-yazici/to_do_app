let today = document.getElementById("day");
let day = new Date()
today.innerText = day.toLocaleString('en-us', { weekday: 'long' });


let toText = document.getElementById("to__do--text");
let toButton = document.getElementById("to__do__button");
let toDo = document.getElementById("add_list");

toButton.addEventListener('click', () => {
    let addList = `<input type="checkbox" name="ch" id="ch">
    <label style="color: white;" for="ch" id="textch">${toText.value}</label> <br>`;
    toDo.innerHTML += addList;
});

let checkBoxT = document.getElementById("textch");
checkBoxT.addEventListener("click", ()=> {
    checkBoxT.innerHTML += <del>add_list</del>
});