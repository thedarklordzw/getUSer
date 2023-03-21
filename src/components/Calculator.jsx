import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operator, setOperator] = useState(null);

  function inputDigit(digit) {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  }

  function inputDecimal() {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  }

  function clearDisplay() {
    setDisplayValue('0');
  }

  function toggleSign() {
    setDisplayValue(
      displayValue.charAt(0) === '-'
        ? displayValue.substr(1)
        : '-' + displayValue
    );
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(`${parseFloat(result.toFixed(7))}`);
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  }

  function performCalculation() {
    const inputValue = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return firstOperand + inputValue;
      case '-':
        return firstOperand - inputValue;
      case '*':
        return firstOperand * inputValue;
      case '/':
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  }

  return (
    <div className='calculator'>
      <div className='calculator-display'>{displayValue}</div>
      <div className='calculator-keypad'>
        <button onClick={clearDisplay}>AC</button>
        <button onClick={toggleSign}>±</button>
        <button onClick={() => handleOperator('%')}>%</button>
        <button onClick={() => handleOperator('/')}>÷</button>
        <button onClick={() => inputDigit('7')}>7</button>
        <button onClick={() => inputDigit('8')}>8</button>
        <button onClick={() => inputDigit('9')}>9</button>
        <button onClick={() => handleOperator('*')}>×</button>
        <button onClick={() => inputDigit('4')}>4</button>
        <button onClick={() => inputDigit('5')}>5</button>
        <button onClick={() => inputDigit('6')}>6</button>
        <button onClick={() => handleOperator('-')}>—</button>
        <button onClick={() => inputDigit('1')}>1</button>
        <button onClick={() => inputDigit('2')}>2</button>
        <button onClick={() => inputDigit('3')}>3</button>
        <button onClick={() => handleOperator('+')}>+</button>
        <button onClick={() => inputDigit('0')}>0</button>
        <button onClick={inputDecimal}>.</button>
        <button onClick={() => handleOperator('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
