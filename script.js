const sidebarOpenButton = document.querySelector(".side-bar-open"); // Open button
const sidebarCloseButton = document.querySelector(".side-bar"); // Close button
const sidebar = document.querySelector(".left"); // Sidebar container
const container = document.querySelector(".container"); // Main layout container
const addbtn = document.querySelector(".add-btn"); //add task list

function right() {
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

right();


function left() {
    const listNameElement = document.querySelector(".list-name");
    const addBtn = document.querySelector(".add-btn");
    const listContainer = document.querySelector(".list-container");

    // Load lists from local storage when the page loads
    function loadLists() {
        const storedLists = JSON.parse(localStorage.getItem("lists")) || [];
        listContainer.innerHTML = ""; // Clear previous lists
        storedLists.forEach(listName => addListToDOM(listName));
    }

    // Function to add list to the DOM and set event listeners
    function addListToDOM(listName) {
        const addList = document.createElement("div");
        addList.classList.add("add-list");
        addList.innerHTML = `
            <div class="al">
                <h4>${listName}</h4>
                <div class="del-list-img" style="opacity: 0; transition: opacity 0.3s;">
                    <img src="imgs/close.png" alt="" class="del-list">
                </div>
            </div>
        `;
        listContainer.appendChild(addList);

        // Add event listeners for hover and delete
        const al = addList.querySelector(".al");
        const dellist = addList.querySelector(".del-list-img");

        al.addEventListener("mouseenter", () => {
            dellist.style.opacity = "1";
        });

        al.addEventListener("mouseleave", () => {
            dellist.style.opacity = "0";
        });

        dellist.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering parent events
            deleteList(listName, addList);
        });
    }

    // Add new list to local storage and DOM
    addBtn.addEventListener("click", () => {
        const listName = listNameElement.value.trim();

        if (!listName) {
            alert("Please enter a valid list name!"); // Show alert only if input is truly empty
            return;
        }

        let storedLists = JSON.parse(localStorage.getItem("lists")) || [];

        if (storedLists.includes(listName)) {
            alert("This list name already exists! Choose a different name.");
            return;
        }

        storedLists.push(listName);
        localStorage.setItem("lists", JSON.stringify(storedLists));

        addListToDOM(listName);
        listNameElement.value = ""; // Clear input field
    });

    // Delete list from local storage and DOM
    function deleteList(listName, listElement) {
        let storedLists = JSON.parse(localStorage.getItem("lists")) || [];
        storedLists = storedLists.filter(name => name !== listName); // Remove selected list
        localStorage.setItem("lists", JSON.stringify(storedLists));

        listElement.remove(); // Remove from DOM
    }

    loadLists(); // Load lists on page load



    document.querySelector(".add-list").addEventListener("click",()=>{
        document.querySelector(".heading").innerHTML =`<h1>${listName}<h1>`
    })
}

left();

