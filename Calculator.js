function calculate(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = num1 / num2;
        break;
    }

    document.getElementById('result').value = result;
  }

  function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
  }