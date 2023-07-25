import { CaesarCipher } from './caesarCipher';

it('tests with one letter', () => {
  expect(CaesarCipher('a',1)).toBe('b');
}); 

it('tests with uppercase and lowercase letters', () => {
  expect(CaesarCipher('aB',2)).toBe('cD');
});

it('tests with punctuation', () => {
  expect(CaesarCipher('a!',3)).toBe('d!');
});

it('tests a string with \'Z\'', () => {
  expect(CaesarCipher('Z',3)).toBe('C');
});

it('tests a long string', () => {
  expect(CaesarCipher('Hello world this is me!',5)).toBe('Mjqqt btwqi ymnx nx rj!');
});