function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (value === '%') {
        value = '/100'; 
    }

    display.value += value; 
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        let result = eval(display.value);
        
        result = parseFloat(result.toFixed(10)); 
        
        if (result === Infinity) {
            display.value = 'Error: Division by zero';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error'; 
    }
}

function toggleMode() {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const modeButton = document.getElementById('modeButton');

    body.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');
    display.classList.toggle('dark-mode');
    buttons.forEach(button => button.classList.toggle('dark-mode'));

    if (body.classList.contains('dark-mode')) {
        modeButton.textContent = '☀️';
    } else {
        modeButton.textContent = '🌙';
    }
}
