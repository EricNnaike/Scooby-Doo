var regex = /[^aeoui]+/i;
// var str = "Phosh";
var str = document.getElementById('textWord');
// var matches = str.replace(regex, 'R');
function replaceFunc() {
  let one = String(str.value);
  let matches = one.replace(regex, 'R');
  document.getElementById('textIn').innerHTML = matches;
}

