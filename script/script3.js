function cacl(val) {
  document.getElementById("res").value += val;
}

function Equal() {
  try {
    document.getElementById("res").value = eval(
      document.getElementById("res").value
    );
  } catch (e) {
    alert("Invalid expression");
  }
}
function de() {
  document.getElementById("res").value = document
    .getElementById("res")
    .value.slice(0, -1);
}
