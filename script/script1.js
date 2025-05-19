function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("res").innerText = ` The output is ${num1 + num2}`;
}
