var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
const tasksDiv = document.querySelector('.tasks');
//var tasks = [];

btnAdd.addEventListener('click', addTask);

document.querySelector('.inputTask').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});


function addTask() {
    var li = document.createElement("li");
    var inputValue = document.querySelector('.inputTask').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);


    if (inputValue === "") {
        alert("Por favor preencha o campo");
    } else {
        document.querySelector('.ulTasks').appendChild(li);
    }

    document.querySelector('.inputTask').value = "";


    var span = document.createElement('span');
    var icon = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);

}


function deleteTaks() {

}
