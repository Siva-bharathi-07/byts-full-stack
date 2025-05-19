function convertf() {
  let num = parseInt(document.getElementById("num").value);
  document.getElementById("res").innerText = `converted to F ${
    (num * 9) / 5 + 32
  }`;
}
function convertc() {
  let num = parseInt(document.getElementById("num").value);
  document.getElementById("res").innerText = `converted to C ${
    ((num - 32) * 5) / 9
  }`;
}
