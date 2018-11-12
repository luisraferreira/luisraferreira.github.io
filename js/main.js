var btnAdd = document.querySelector('.addTask');
var input = document.querySelector('.inputTask');
var tasks = [];

btnAdd.addEventListener('click', addTask);

function addTask() {
    tasks.push(input.value);
    console.log(tasks)
}
