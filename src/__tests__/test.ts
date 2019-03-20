import { randomColor } from '../';

test('returned color is valid hexadecimal color', () => {
  expect(randomColor()).toMatch(/^#[A-F0-9]{6}$/);
});
