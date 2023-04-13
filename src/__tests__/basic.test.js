import getHealth from '../testfunctions';

test.each([
  [90, 'healthy'],
  [45, 'wounded'],
  [10, 'critical'],
])('status:', (health, expected) => {
  const result = getHealth({ name: 'Маг', health });
  expect(result).toBe(expected);
});
