class TodoList {
    constructor() {
        // Recuperar elementos del DOM
        this.input = document.querySelector('input');
        this.addButton = document.querySelector('.btn-add');
        this.ul = document.querySelector('ul');
        this.emptyMessage = document.querySelector('.empty');

        // Anadir evento al botón de añadir tarea
        this.addButton.addEventListener('click', (event) => this.addTask(event));
    }

    // Función para anadir una nueva tarea
    addTask(event) {
        event.preventDefault();

        const taskText = this.input.value.trim(); // Obtener el texto del input sin espacios

        if (taskText === '') {
            return; // si no hay texto nada
        }
        // Crear un nuevo elemento <li>
        // Crear un nuevo elemento <p> para el texto    
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = taskText; // Establecer el texto de la tarea

        // Crear un nuevo botón de eliminar la tarea

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        // Anadir la clase 'btn-delete' al botón
        deleteButton.classList.add('btn-delete');

        // Anadir la tarea y el botón de eliminar al elemento <li>
        li.appendChild(p);
        li.appendChild(deleteButton);

        // Anadir el elemento <li> a <ul>
        this.ul.appendChild(li);

        // Limpiar el input
        this.input.value = '';

        // Ocultar el mensaje de "All tasks are completed"
        this.emptyMessage.style.display = 'none';

        // Anadir lo que tiene que  hacer  le  boton de borrar
        deleteButton.addEventListener('click', (event) => this.deleteTask(event));
    }

    // Función para eliminar una tarea
    deleteTask(event) {
        const taskItem = event.target.parentElement;
        this.ul.removeChild(taskItem);

        // Mostrar el mensaje de "All tasks are completed" si la lista está vacía
        if (this.ul.children.length === 0) {
            this.emptyMessage.style.display = 'block';
        }
    }
}

// Iniciar
const todoList = new TodoList();