// Function to add a new task to the list
function addTask(event) {
    event.preventDefault();

    // Get input values
    const date = document.getElementById("todoDate").value;
    const time = document.getElementById("todoTime").value;
    const description = document.getElementById("todoDescription").value;
    const title = document.getElementById("todoTitle").value;

    // Create a new list item
    const listItem = document.createElement("div");
    listItem.className = "todo-item";
    //listItem.innerHTML = `<span>${date} ${time}</span><span>${description}</span>
    //      <button onclick="removeTask(this)">Delete</button>`;
    card = `<div class="card" style="width: 18rem; background-color: #f8f9fa;">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <h6>Date: ${date}</h6>
            <h6>Time: ${time}</h6>
            <a class="btn btn-primary" onclick="removeTask(this)">Delete</a>
        </div>
    </div>`;
    listItem.innerHTML = card;

    // Append the new item to the list
    document.getElementById("todoList").appendChild(listItem);

    // Clear input fields
    document.getElementById("todoDate").value = "";
    document.getElementById("todoTime").value = "";
    document.getElementById("todoTitle").value = "";
    document.getElementById("todoDescription").value = "";
}

// Function to remove a task from the list
function removeTask(task) {
    task.parentElement.remove();
}

// Add event listener to the form
document.getElementById("todoForm").addEventListener("submit", addTask);
