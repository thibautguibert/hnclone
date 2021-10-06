import { getNewsIndexes, getNewsNumber } from './util';

test('getNewsIndexes gives array of indexes of news to display on page X', () => {
  expect(getNewsIndexes(0)).toEqual([0, 0]);
  expect(getNewsIndexes(1)).toEqual([0, 20]);
  expect(getNewsIndexes(2)).toEqual([20, 40]);
  expect(getNewsIndexes(25)).toEqual([480, 500]);
  expect(getNewsIndexes(26)).toEqual([0, 0]);
});

test('getNewsNumber retrieves index from the news', () => {
  expect(getNewsNumber(1, 0)).toEqual(1);
  expect(getNewsNumber(1, 10)).toEqual(11);
  expect(getNewsNumber(3, 18)).toEqual(59);
});
