const list = document.querySelector('.list');
const input = document.querySelector('#input-todo');
const date = document.querySelector('#date');
const clearButton = document.querySelector('.btn-outline');
const addItem = document.querySelector('.add-item');

addItem.addEventListener('click',add);
list.addEventListener('click',removeTask);
clearButton.addEventListener('click',removeAllTasks);

function add(e){
    if(input.value === ''){
        alert('Add a task');
    }
    else{
    let ele = document.createElement('li');
    let i = document.createElement('i');
    i.className = 'fas fa-trash-alt';
    ele.appendChild(i);
    ele.appendChild(document.createTextNode(input.value));
    let addDate = document.createElement('span');
    addDate.className = 'float-right';
    addDate.appendChild(document.createTextNode(date.value));
    ele.appendChild(addDate);
    list.appendChild(ele);
    input.value='';
    date.value='';
    }

    e.preventDefault();
}

function removeTask(e){
    let ele;

    ele = e.target;
    if(e.target.classList.contains('fas')){
        ele = e.target.parentElement.remove();
    }

    e.preventDefault();
}

function removeAllTasks(e) {
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
  
    e.preventDefault();
}