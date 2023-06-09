export const deleteBracketsForSingleVars = (string: string): string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' && string[i + 2] === ')') {
      string = string.substring(0, i) + string.substring(i + 1, i + 1) + string.substring(i + 3);
    }
  }

  return string;
};
