var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
const tasksDiv = document.querySelector('.tasks');
//var tasks = [];

btnAdd.addEventListener('click', addTask);

function addTask() {
    var task = "";
    if (input.value != '') {

        const markup = `<div class="task"> ${input.value} </div>`;
        tasksDiv.innerHTML = markup;

    }
}

function deleteTaks() {

}
