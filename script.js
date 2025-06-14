const display = document.getElementById('display');
const history = document.getElementById('history');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let input = display.value.replace(/(\d+(\.\d+)?)%/g, '($1/100)');
    const result = eval(input);
    history.innerHTML += `<div>${input} = ${result}</div>`;
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (
    (e.key >= '0' && e.key <= '9') ||
    ['+', '-', '*', '/', '.'].includes(e.key)
  ) {
    append(e.key);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
