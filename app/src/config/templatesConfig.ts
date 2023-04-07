export const templateConfig = {
  defaultSymbol: '@',
  min: -20,
  max: 20
};

export const filters = {
  odd: (x: number) => x % 2 !== 0,
  even: (x: number) => x % 2 === 0,
  withoutZero: (x: number) => x !== 0,
  aboveZero: (x: number) => x > 0,
  lessZero: (x: number) => x < 0
};
