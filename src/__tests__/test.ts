import { getRandomColor } from '../';

test('Random color is valid', () => {
  expect(getRandomColor()).toMatch(/^#[A-F0-9]{6}$/);
});
