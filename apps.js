let today = document.getElementById("day");
let day = new Date()
today.innerText = day.toLocaleString('en-us', { weekday: 'long' });


let toText = document.getElementById("to__do--text");
let toButton = document.getElementById("to__do__button");
let toDo = document.getElementById("lists");
let addList = document.getElementById("task__list");



toButton.addEventListener("click", ()=> {
    const li = document.createElement('li');
    const input = document.createElement("input");
    const label = document.createElement("label");
    const del_icon = document.createElement("a");

    del_icon.appendChild(document.createTextNode("✖"));

    li.className = 'list-group-item';
    del_icon.className="del__icon"
    input.className = "input_item";
    input.setAttribute("type", "checkbox");
    input.id = "süheyl";
    label.setAttribute("for","süheyl");
    label.setAttribute("id","mehmet");
    label.appendChild(document.createTextNode(toText.value));
    li.appendChild(input);
    li.appendChild(label)
    addList.appendChild(li);
    toText.value = "";
    li.appendChild(del_icon);

    del_icon.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
    });

    
    li.addEventListener("click", ()=>{
        if(li.style.backgroundColor != "white"){
            li.style.backgroundColor = "aqua";
        } 
    })



});




