function calculate() {
  var int1 = parseFloat(document.getElementById('int1').value);
  var int2 = parseFloat(document.getElementById('int2').value);
  
  if (!isNaN(int1) && !isNaN(int2)) {
    var result = int1 + int2;
    alert("Result: " + result);
  } else {
    alert("Please enter valid numbers.");
  }
}
