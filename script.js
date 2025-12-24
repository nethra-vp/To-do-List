const inputArea = document.getElementById("InputArea");

const ListContainer = document.getElementById("List-container")

function addTask() {
    if(inputArea.value === ''){
        alert("You must write something!")
    }
    // adds a new task to the list
    else {
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        // smoothly scrolls down to show the newly added task
        ListContainer.scrollTo({top: ListContainer.scrollHeight, behavior: "smooth"})
    }
    // clears the input field after adding a task
    inputArea.value = '';
    saveData();
}

// allows pressing Enter to add a task
inputArea.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        addTask();
    }
})

// marks tasks as completed or deletes them
ListContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

// saves the current list of tasks in local storage
function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

// retrieves saved tasks from local storage and displays them
function showData() {
    ListContainer.innerHTML = localStorage.getItem("data");
}

// loads saved tasks when the page is opened and refreshed
showData();