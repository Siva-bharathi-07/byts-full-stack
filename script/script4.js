var count = 0;

var intialID;

function start() {
  intialID = setInterval(() => {
    count++;
    document.getElementById("res").innerText = `Count :${count} `;
  }, 1000);
}
function stop() {
  clearInterval(intialID);
}
function reset() {
  count = 0;
  document.getElementById("res").innerText = `Count :${count} `;
}
