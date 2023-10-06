document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#addTodo');
    const input = document.querySelector('#todo');
    const list = document.querySelector('#todoList');

    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < savedTodos.length; i++) {
        let newTodo = document.createElement("li");
        newTodo.innerText = savedTodos[i].task;
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if (newTodo.isCompleted) {
            newTodo.style.textDecoration = "line-through";
        }
        list.appendChild(newTodo);
    }
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.add('done');

        }
        for (let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i].task === clickedListItem.innerText) {
                savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
                localStorage.setItem("todos", JSON.stringify(savedTodos));
            }
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTodo = document.createElement('li');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        newTodo.innerText = input.value;
        newTodo.appendChild(removeButton);
        input.value = '';
        list.appendChild(newTodo);

        savedTodos.push({ task: newTodo.innerText, isCompleted: false });
        localStorage.setItem("todos", JSON.stringify(savedTodos));
    });
});
