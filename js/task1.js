function run() {
  const title = "JavaScript"; 
  let a = 12;                 
  let b = 5;                  
  const isFun = true;         

  console.log("Types:", typeof title, typeof a, typeof isFun);
  console.log("a + b =", a + b);
  console.log("a - b =", a - b);
  console.log("a * b =", a * b);
  console.log("a / b =", a / b);
  console.log("a % b =", a % b);
  console.log("a ** 2 =", a ** 2);

  console.log(title + " is fun: " + isFun);          
  console.log("Sum is " + (a + b) + ", product is " + a * b);
}
run();
document.getElementById("rerun").addEventListener("click", run);
