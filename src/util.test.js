/* eslint-disable object-curly-newline */
import moment from 'moment';
import {
  getNewsIndexes, getNewsNumber, getSource, getTime,
} from './util';

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

test('getSource extracts website name from a url', () => {
  expect(getSource('https://lucasfcosta.com/2021/09/20/monte-carlo-forecasts.html')).toEqual('lucasfcosta.com');
  expect(getSource('https://www.finewoodworking.com/2021/07/19/choosing-the-right-wall-anchors'))
    .toEqual('finewoodworking.com');
});

test('getTime gives time difference between date in seconds and now', () => {
  const dateInSeconds = moment({ y: '2021', M: '10', d: '6', h: '11', m: '35' }).valueOf() / 1000;
  const datePlusTenMinutes = moment({ y: '2021', M: '10', d: '6', h: '11', m: '45' });
  const datePlusOneHour = moment({ y: '2021', M: '10', d: '6', h: '12', m: '36' });
  const datePlusTwoDays = moment({ y: '2021', M: '10', d: '8', h: '14', m: '36' });
  expect(getTime(dateInSeconds, datePlusTenMinutes)).toEqual('10 minutes');
  expect(getTime(dateInSeconds, datePlusOneHour)).toEqual('1 hour');
  expect(getTime(dateInSeconds, datePlusTwoDays)).toEqual('2 days');
  expect(getTime(1633152550, moment(1633516027831))).toEqual('4 days');
});
