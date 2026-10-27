const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");
liveInput.addEventListener("keyup", () => { liveOutput.textContent = liveInput.value; });
