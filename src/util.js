import moment from 'moment';

export const getNewsIndexes = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 25) return [0, 0];
  return [(pageNumber - 1) * 20, pageNumber * 20];
};

export const getNewsNumber = (pageNumber, index) => (pageNumber - 1) * 20 + index + 1;

export const getSource = (url) => url.replace('www.', '').split('/')[2];

export const getTime = (time, now = moment()) => {
  let unit = 'minutes';
  let timeDiff = now.diff(moment(time * 1000), 'minutes');
  if (timeDiff >= 1440) {
    timeDiff = Math.floor(timeDiff / 1440);
    unit = timeDiff > 1 ? 'days' : 'day';
  } else if (timeDiff >= 60) {
    timeDiff = Math.floor(timeDiff / 60);
    unit = timeDiff > 1 ? 'hours' : 'hour';
  }
  return `${timeDiff} ${unit}`;
};
