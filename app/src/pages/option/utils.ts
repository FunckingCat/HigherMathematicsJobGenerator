import { filters, templateConfig } from 'config/templatesConfig';

type Filter = (x: number) => boolean;

const getCharByIndex = (str: string, index: number) => str[index % str.length];
const getItemByIndex = <T>(arr: T[], index: number) => arr[index % arr.length];

// Генерирует массив, в который входят числа от min до max, проходящие проверку заданной функцией filter
const generateArray = (min: number, max: number, filter?: Filter) => {
  const arr: number[] = [];

  for (let i = min; i <= max; i++) {
    if (!filter) {
      arr.push(i);
    }

    if (filter?.(i)) {
      arr.push(i);
    }
  }

  return arr;
};

// Возвращает рандомный элемент из массива в зависимости от хэша и номера задания в варианте
const getRandomChar = (arr: Array<string | number>, char: string) => {
  const UTFCode = char.charCodeAt(0);

  return getItemByIndex(arr, UTFCode).toString();
};

export const parseTemplate = (template: string, hash: string, serialNumber: number) => {
  const replacer = (match: string) => {
    const str = match.substring(1, match.length - 1);
    const [range, funcName] = str.split('|');
    const [min, max] = range.split(':').map(Number);

    const func = filters[funcName as keyof typeof filters];
    const char = getCharByIndex(hash, serialNumber + 1);

    // Если задано дефолтное значение
    if (range === templateConfig.defaultSymbol) {
      const arr = generateArray(templateConfig.min, templateConfig.max, func);
      return getRandomChar(arr, char);
    }

    // Если задан не диапозон, а конкретные значения через запятую
    if (!max) {
      const values = range.split(',');
      return getRandomChar(values, char);
    }

    const arr = generateArray(min, max, func);
    return getRandomChar(arr, char);
  };

  return template.replace(/\/.*?\//g, replacer);
};
