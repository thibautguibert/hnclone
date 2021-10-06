import getNewsIndexes from './util';

test('getNewsIndexes gives array of indexes of news to display on page X', () => {
  expect(getNewsIndexes(0)).toEqual([0, 0]);
  expect(getNewsIndexes(1)).toEqual([0, 20]);
  expect(getNewsIndexes(2)).toEqual([20, 40]);
  expect(getNewsIndexes(25)).toEqual([480, 500]);
  expect(getNewsIndexes(26)).toEqual([0, 0]);
});
