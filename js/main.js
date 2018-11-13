var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
//const tasksDiv = document.querySelector('.tasks');//var tasks = [];

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
    var span = document.createElement('span');
    var icon = document.createTextNode("\u00D7");

    li.appendChild(text);

    if (inputValue === "") {
        alert("Por favor preencha o campo");
    } else {
        document.querySelector('.ulTasks').appendChild(li);
    }

    document.querySelector('.inputTask').value = "";

    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);

    //delete task
    var closeBtn = document.querySelectorAll('.close');
    //    closeBtn[i].addEventListener('click', deleteTask);
    var ul = document.querySelector('.ulTasks');
    var len = ul.children.length;
    for (var i = 0; i < len; i++) {
        //        (function (index) {
        //            closeBtn[i].onclick = function (el) {
        //                deleteTask(el);
        //            }
        //        })(i);
        closeBtn[i].addEventListener('click', deleteTask);
    }
}


var deleteTask = function (el) {
    el.target.parentNode.style.display = "none";
}
