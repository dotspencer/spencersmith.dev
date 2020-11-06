export const DIMENTION = 24;
export const LINE_WIDTH = 6;
export const DELAY = 15;

export const toIndex = (row, column) => {
  if (row < 0 || row >= DIMENTION) return null;
  if (column < 0 || column >= DIMENTION) return null;
  return (row * DIMENTION) + column;
};

export const toRowColumn = (index) => {
  const row = Math.floor(index / DIMENTION);
  const column = index % DIMENTION;
  return { row, column };
};

const shuffle = (array) => {
  for(let i = 0; i < array.length; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

export const getNeighbors = (index) => {
  const { row, column } = toRowColumn(index);
  const up = toIndex(row - 1, column);
  const down = toIndex(row + 1, column);
  const left = toIndex(row, column - 1);
  const right = toIndex(row, column + 1);
  return shuffle([up, down, left, right].filter(n => n !== null));
};
