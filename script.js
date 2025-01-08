// Função para adicionar valores ao visor
function appendValue(value) {
    const display = document.getElementById('result');
    display.value += value;
}

// Função para limpar o visor
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Função para calcular o resultado
function calculate() {
    const display = document.getElementById('result');
    const expression = display.value
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-');
    
    try {
        const result = eval(expression);
        display.value = isFinite(result) ? result : 'Erro';
    } catch {
        display.value = 'Erro';
    }
}
