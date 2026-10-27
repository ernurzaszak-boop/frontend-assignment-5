const result = document.getElementById("calcResult");
document.getElementById("calcBtn").addEventListener("click", () => {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("op").value;
  if (isNaN(a) || isNaN(b)) { result.textContent = "Result: enter both numbers"; return; }
  let r;
  switch (op) {
    case "+": r = a + b; break;
    case "-": r = a - b; break;
    case "*": r = a * b; break;
    case "/": r = b === 0 ? "cannot divide by zero" : a / b; break;
  }
  result.textContent = "Result: " + r;
});


