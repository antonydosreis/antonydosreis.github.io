// Open and close divs
function open_div(id, display = "block") {
  document.getElementById(id).style.display = display;
  // document.getElementById(id).classList.add("show");
  // document.getElementById(id).classList.remove("hide");
}

function close_div(id) {
  // document.getElementById(id).classList.remove("show");
  // document.getElementById(id).classList.add("hide");
  // setTimeout(function () {
  document.getElementById(id).style.display = "none";
  // }, 250);
}
