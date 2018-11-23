var btnAddTask = document.querySelector('.addTask');
var field = document.querySelector('.inputTask');
var ulTasks = document.querySelector('.ulTasks');
var deleteAllBtn = document.querySelector('.deleteAll');
var task;

//Botao add
btnAddTask.addEventListener('click', addTask);
field.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});

//Botao deleteAll
deleteAllBtn.addEventListener('click', deleteAllTasks);

function addTask() {
    var fieldValue = field.value;
    var radioCheck = document.querySelector('.checkSelect:checked');

    if (radioCheck != null) {
        var radioColor = radioCheck.dataset.color;
        var template = `<li class="task" style="color:${radioColor}">
                                <p>${fieldValue}<span class="close">\u00D7</span><span class="edit">editar<span></p>
                            </li>`;
        radioCheck.checked = false;
    } else {
        var template = `<li class="task">
                                <p>${fieldValue}<span class="close">\u00D7</span><span class="edit">editar<span></p>
                            </li>`;
    }

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
    console.log(el.target.parentElement);
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

//editar e favoritos próxima aula
//guardar info e botao organizar por cor
//mudar posiçoes
