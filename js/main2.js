var btnAddTask = document.querySelector('.addTask');
var field = document.querySelector('.inputTask');
var ulTasks = document.querySelector('.ulTasks');
var deleteAllBtn = document.querySelector('.deleteAll');
var modal = document.querySelector('.modal');
var closeModalBtn = document.querySelector('.modal-content .close');
var editInput = document.querySelector('.inputTaskEdit');
var saveTaskBtn = document.querySelector('.saveTask');
var task;
var indexCreateTask;
var indexTask;

//Botao add
btnAddTask.addEventListener('click', addTask);
field.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});

closeModalBtn.addEventListener('click', closeModal);

saveTaskBtn.addEventListener('click', saveEditedTask)

//Botao deleteAll
deleteAllBtn.addEventListener('click', deleteAllTasks);

init();

function init() {
    for (var i = 1; i <= localStorage.length; i++) {
        var parse = JSON.parse(localStorage[i]);
        var descricao = parse.descricao;
        var color = parse.color;

        if (color != null) {
            var template = `<li class="task" style="color:${color}" data-index="${i}">
                                <p>${descricao}<span class="close">\u00D7</span><span class="edit">&#128393;</span></p>
                            </li>`;
        } else {
            var template = `<li class="task" style="color:black" data-index="${i}">
                                <p>${descricao}<span class="close">\u00D7</span><span class="edit">&#128393;</span></p>
                            </li>`;
        }
        ulTasks.insertAdjacentHTML('beforeend', template);
    }
}

function addTask() {
    var fieldValue = field.value;
    var radioCheck = document.querySelector('.checkSelect:checked');
    indexCreateTask = ulTasks.children.length + 1;

    if (radioCheck != null) {
        var radioColor = radioCheck.dataset.color;
        var template = `<li class="task" style="color:${radioColor}" data-index="${indexCreateTask}">
                                <p>${fieldValue}<span class="close">\u00D7</span><span class="edit">&#128393;</span></p>
                            </li>`;
        radioCheck.checked = false;
    } else {
        var template = `<li class="task" data-index="${indexCreateTask}">
                                <p>${fieldValue}<span class="close">\u00D7</span><span class="edit">&#128393;</span></p>
                            </li>`;
    }


    var obj = {
        descricao: fieldValue,
        cor: radioColor
    }

    var objString = JSON.stringify(obj);

    localStorage.setItem(indexCreateTask, objString);

    if (!fieldValue == "") {
        //PROCURAR SUBSTITUIÇÃO PARA ISTO
        ulTasks.insertAdjacentHTML('beforeend', template);
        field.value = "";

        btnDeleteShow();
    } else {
        alert("Insere algo no input!")
    }
    var btnDelete = document.querySelectorAll('.close');
    var btnEdit = document.querySelectorAll('.edit');
    task = document.querySelectorAll('.task');
    for (var i = 0; i < task.length; i++) {
        btnDelete[i].addEventListener('click', deleteTask);
        btnEdit[i].addEventListener('click', editTask);
    }
}

function editTask(el) {
    var text = el.target.parentElement.innerHTML.split('<span class="close">')[0];
    var color = el.target.closest('.task').style.color;
    indexTask = el.target.closest('.task').dataset.index;

    if (color == "") {
        document.querySelector('.checkSelectEdit[data-color="black"]').checked = true;
    } else {
        document.querySelector(`.checkSelectEdit[data-color="${color}"]`).checked = true;
    }
    editInput.value = text;

    modal.style.display = "block";
}

function btnDeleteShow() {

    if (ulTasks.children.length > 1) {
        deleteAllBtn.style.display = "block";
    } else {
        deleteAllBtn.style.display = "none";
    }

}

function deleteTask(element) {
    element.target.closest('.task').remove();
    btnDeleteShow();
}

function deleteAllTasks() {
    task = document.querySelectorAll('.task');
    for (var i = 0; i < task.length; i++) {
        task[i].remove();
    }
    btnDeleteShow();
}

function closeModal() {
    modal.style.display = "none";
}

function saveEditedTask() {
    var editedFieldValue = `${editInput.value}<span class="close">\u00D7</span><span class="edit">&#128393;</span>`;
    var editedFieldColor = document.querySelector('.checkSelectEdit:checked').dataset.color;
    var liTaskText = document.querySelector(`.task[data-index='${indexTask}'] p`);

    liTaskText.innerHTML = editedFieldValue;
    liTaskText.closest('.task').style.color = editedFieldColor;
    closeModal();

    var btnDelete = document.querySelectorAll('.close');
    var btnEdit = document.querySelectorAll('.edit');
    task = document.querySelectorAll('.task');
    for (var i = 0; i < task.length; i++) {
        btnDelete[i].addEventListener('click', deleteTask);
        btnEdit[i].addEventListener('click', editTask);
    }

    //VER COMO FAZER COM TEMPLATE
}

//favoritos próxima aula
//guardar info e botao organizar por cor
//mudar posiçoes
