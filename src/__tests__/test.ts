import { randomColor } from '../';

test('Random color is valid', () => {
  expect(randomColor()).toMatch(/^#[A-F0-9]{6}$/);
});
