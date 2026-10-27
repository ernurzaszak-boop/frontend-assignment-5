const box = document.getElementById("styleBox");
const colors = ["#ffe9a8", "#c8e6c9", "#bbdefb", "#f8bbd0", "#e1bee7"];
const sizes = ["16px", "20px", "26px", "32px"];
let c = 0, s = 0;
document.getElementById("changeBg").addEventListener("click", () => {
  box.style.backgroundColor = colors[c++ % colors.length];
  box.style.color = "#1c2430";
});
document.getElementById("changeFont").addEventListener("click", () => {
  box.style.fontSize = sizes[++s % sizes.length];
});
