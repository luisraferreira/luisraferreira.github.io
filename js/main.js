var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
//var template;//const tasksDiv = document.querySelector('.tasks');//var tasks = [];

btnAdd.addEventListener('click', addTask);

document.querySelector('.inputTask').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});


function addTask() {
    var inputValue = document.querySelector('.inputTask').value;
    var colorSelected = document.querySelector('.checkSelect');
    var tasksContainer = document.querySelector('.ulTasks');

    var template = `
        <article class="pokemon">
            <h3>${inputValue}</h3>
            <p>The Pokemon ${inputValue} has a base experience of</p>
        </article>
    `;

    //        var li = document.createElement("li");
    //        var text = document.createTextNode(inputValue);
    //        var span = document.createElement('span');
    //        var icon = document.createTextNode("\u00D7");

    if (inputValue === "") {
        alert("Por favor preencha o campo");
    } else {
        tasksContainer.insertAdjacentHTML('beforeend', template);
    }

    document.querySelector('.inputTask').value = "";
//    span.className = "close";
//    span.appendChild(icon);
//    li.append(span);

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
    el.target.parentElement.remove();
}
