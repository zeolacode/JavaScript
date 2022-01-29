// função que adiciona tarefa
function addTask() {

    // pegar Titulo da tarefa
    const TaskTitle = document.querySelector("#task-title").value;

    if(TaskTitle){

        // clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = TaskTitle;

        // remove as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar tarefa na lista
        const list = document.querySelector("#task-list");
        
        list.appendChild(newTask);

        // adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        })

        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });


    }

}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

// função de completar a tarefa
function completeTask(task) {
       
    const taskToComplete = task.parentNode;
    
    taskToComplete.classList.toggle("done");

}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    
    e.preventDefault();
    
    addTask();

})