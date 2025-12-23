const inputArea = document.getElementById("InputArea");

const ListContainer = document.getElementById("List-container")

function addTask() {
    if(inputArea.value === ''){
        alert("You must write something!")
    }
    // inserts new tasks
    else {
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        // when a new task is added, it smoothly scrolls down to show the new added task
        ListContainer.scrollTo({top: ListContainer.scrollHeight, behavior: "smooth"})
    }
    // clears the insert space after value is entered
    inputArea.value = '';
    saveData();
}

// makes sure the enter button adds the new task 
inputArea.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        addTask();
    }
})

// to toggle between checked and unchecked, to delete tasks, 
ListContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
});

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showData() {
    ListContainer.innerHTML = localStorage.getItem("data");
}

showData();