const list = document.getElementById("itemList");
document.getElementById("addItem").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item " + (list.children.length + 1);
  list.appendChild(li);
});
document.getElementById("removeItem").addEventListener("click", () => {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});
