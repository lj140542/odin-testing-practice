const Calculator = () => {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const divide = (a, b) => b == 0 ? null : a / b;
  const multiply = (a, b) => a * b;
  return { add, substract, divide, multiply };
}

export { Calculator };