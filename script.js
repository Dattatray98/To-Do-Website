const sidebarOpenButton = document.querySelector(".side-bar-open"); // Open button
const sidebarCloseButton = document.querySelector(".side-bar"); // Close button
const sidebar = document.querySelector(".left"); // Sidebar container
const container = document.querySelector(".container"); // Main layout container

function main() {
    sidebarOpenButton.addEventListener("click", () => {
        sidebar.classList.add("open");
        container.classList.add("open"); // Move right section
    });

    sidebarCloseButton.addEventListener("click", () => {
        sidebar.classList.remove("open");
        container.classList.remove("open"); // Reset right section
    });

    document.addEventListener("DOMContentLoaded", () => {
        const taskTitle = document.querySelector(".task-title");
        const taskDesc = document.querySelector(".task-desc");
        const taskDate = document.querySelector(".date");
        const taskTime = document.querySelector(".time");
        const addTaskBtn = document.querySelector(".add-task");
        const taskList = document.createElement("div"); // Task container
        taskList.classList.add("task-list");
        document.querySelector(".task-container").appendChild(taskList); // Append to UI
    
        // Load tasks from local storage
        function loadTasks() {
            taskList.innerHTML = "";
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.reverse().forEach((task, index) => addTaskToUI(task, index)); // Reverse to show newest first
        }
    
        // Add task to UI
        function addTaskToUI(task, index) {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
    
            taskItem.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.desc}</p>
                <p><strong>Date:</strong> ${task.date}</p>
                <p><strong>Time:</strong> ${task.time}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
    
            taskList.prepend(taskItem); // Add to top
        }
    
        // Save task to local storage
        function saveTask() {
            const title = taskTitle.value.trim();
            const desc = taskDesc.value.trim();
            const date = taskDate.value;
            const time = taskTime.value;
    
            if (!title) return alert("Please enter a task title.");
    
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push({ title, desc, date, time });
            localStorage.setItem("tasks", JSON.stringify(tasks));
    
            taskTitle.value = "";
            taskDesc.value = "";
            taskDate.value = "";
            taskTime.value = "12:00";
    
            loadTasks(); // Refresh UI
        }
    
        // Delete task
        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }
    
        // Event listeners
        addTaskBtn.addEventListener("click", saveTask);
        taskList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                deleteTask(e.target.dataset.index);
            }
        });
    
        loadTasks(); // Load saved tasks on page load
    });
    
}

main();
