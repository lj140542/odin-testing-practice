import { Calculator } from './calculator';

let c = Calculator();

it('tests the add function of the Calculator', () => {
  expect(c.add(1, 2)).toBe(3);
});

it('tests the substract function of the Calculator', () => {
  expect(c.substract(1, 2)).toBe(-1);
});

it('tests the divide function of the Calculator', () => {
  expect(c.divide(4, 2)).toBe(2);
  expect(c.divide(4, 0)).toBe(null);
});

it('tests the multiply function of the Calculator', () => {
  expect(c.multiply(1, 2)).toBe(2);
});