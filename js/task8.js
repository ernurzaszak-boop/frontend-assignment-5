let tasks = []; // { id, text, done }
let nextId = 1;
const input = document.getElementById("taskInput");
const listEl = document.getElementById("taskList");

function render() {
  listEl.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");
    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => { task.done = !task.done; render(); });
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => { tasks = tasks.filter(t => t.id !== task.id); render(); });
    li.append(span, del);
    listEl.appendChild(li);
  });
}
function addTask() {
  const value = input.value.trim();
  if (!value) return;
  tasks.push({ id: nextId++, text: value, done: false });
  input.value = "";
  render();
}
document.getElementById("addTask").addEventListener("click", addTask);
input.addEventListener("keydown", e => { if (e.key === "Enter") addTask(); });
