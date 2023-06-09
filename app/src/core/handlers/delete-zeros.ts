const isLatinLetter = (char: string): boolean => {
  const code = char.charCodeAt(0);

  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

export const deleteZeros = (string: string): string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '0' && isLatinLetter(string[i + 1])) {
      string = string.substring(0, i + 1) + string.substring(i + 2);
    }
  }

  string = string.replace(/[+|-]0/g, '');

  return string;
};
