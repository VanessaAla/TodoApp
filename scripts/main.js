function updateCounters() {
  // Total number of todos
  const totalCount = document.getElementById("total-count");
  console.log("totalCount ", totalCount);
  const totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;
  console.log("totalCount ", totalCount);

  // Total number of completed todos
  const completedCount = document.getElementById("completed-count");
  const completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Total number of uncompleted todos
  const todoCount = document.getElementById("todo-count");
  const uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

updateCounters();

function toggleDone(event) {
  const checkbox = event.currentTarget;
  // check the checked status of the checkbox
  if (checkbox.checked) {
    // the "completed" class is set on the parent element, the <li>
    checkbox.parentElement.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.parentElement.className = "todo";
  }

  updateCounters();
}

const checkboxes = document.querySelectorAll(".todo input");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", toggleDone);
}
