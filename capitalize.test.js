import { capitalize } from './capitalize'

it('test the capitalize function', () => {
  expect(capitalize('test string')).toBe('Test string');
});