export const getNewsIndexes = (pageNumber) => {
  if (pageNumber < 1 || pageNumber > 25) return [0, 0];
  return [(pageNumber - 1) * 20, pageNumber * 20];
};

export const getNewsNumber = (pageNumber, index) => (pageNumber - 1) * 20 + index + 1;
