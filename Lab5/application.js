document.addEventListener('DOMContentLoaded', function() {
    var todoList = document.getElementById('todo-list');
    var taskDetail = document.getElementById('task-detail');
    var addTaskButton = document.getElementById('addtask-button');
    var taskCount = 0;
    document.getElementById('task-detail');
    document.getElementsByClassName('remove-button');
    var addTask = function() {
        var taskDiv = document.createElement('div');
        var taskH5 = document.createElement('h5');
        taskH5.setAttribute('class', 'col-xs-4 task');
        taskH5.innerHTML = taskDetail.value;
        taskDiv.appendChild(taskH5);
        todoList.appendChild(taskDiv);
    };
    addTaskButton.onclick = function() {
        if (taskCount < 10 && taskDetail.value !== '') {
            addTask();
            taskCount++;
            taskDetail.value = '';
        }
    };
    var addTask = function() {
        var taskDiv = document.createElement('div');
        var taskH5 = document.createElement('h5');
        var removeButton = document.createElement('button');
        removeButton.setAttribute('class','btn btn-danger remove-button');
        removeButton.innerHTML = "REMOVE";
        removeButton.onclick = function() {
            var parent = this.parentNode.parentNode;
            var child = this.parentNode;
            parent.removeChild(child);
        }
        taskH5.setAttribute('class', 'col-xs-4 task');
        taskH5.innerHTML = taskDetail.value;
        taskDiv.appendChild(taskH5);
        taskDiv.appendChild(removeButton);
        todoList.appendChild(taskDiv);
    };
});
