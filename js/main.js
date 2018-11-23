var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
var template;

btnAdd.addEventListener('click', addTask);

document.querySelector('.inputTask').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});


function addTask() {
    var inputValue = document.querySelector('.inputTask').value;
    var colorSelected = document.querySelector('.checkSelect:checked');
    var tasksContainer = document.querySelector('.ulTasks');


    if (inputValue === "") {
        alert("Por favor preencha o campo!");
    } else {
        if (colorSelected == null) {
            alert("Por favor selecione uma cor!");
        } else {
            var color = colorSelected.dataset.color;
            var classname = colorSelected.dataset.class;

            //Template literal
            template = `<li class="task" style="color:${color}">
                                <p class="${classname}">${inputValue} <span class="close">\u00D7</span> <span class="edit">&#128393;</span> <span class="favorite">&#9825;</span></p>
                            </li>`;

            //            template = '<li class="task" style="color:' + color + '"><p>' + inputValue + '<span class="close">\u00D7</span> <span class="edit">&#128393;</span><span class="favorite">&#9825;</span></p></li>'

            tasksContainer.insertAdjacentHTML('beforeend', template);

            colorSelected.checked = false;
            document.querySelector('.inputTask').value = "";

        }
    }

    //delete task
    var closeBtn = document.querySelectorAll('.close');
    var ul = document.querySelector('.ulTasks');
    var len = ul.children.length;
    for (var i = 0; i < len; i++) {
        closeBtn[i].addEventListener('click', deleteTask);
    }

    //edit task
    var editBtn = document.querySelectorAll('.edit');
    for (var j = 0; j < len; j++) {
        editBtn[j].addEventListener('click', editTask);
    }

    //favorite
    //    var favoriteBtn = document.querySelectorAll('.favorite');
    //    for (var j = 0; j < len; j++) {
    //        editBtn[j].addEventListener('click', editTask);
    //    }

}

var deleteTask = function (el) {
    el.target.parentElement.remove();
}

var editTask = function (el) {
    var parent = el.target.parentElement;
    var text = parent.innerText.split('\u00D7')[0];
    var color = parent.parentElement.style.color;

    document.querySelector(`.checkSelect[data-color=${color}]`).checked = true;
    document.querySelector('.inputTask').value = text;
    el.target.parentElement.remove();
}
