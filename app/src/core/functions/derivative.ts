import { type ConfigFunction } from './types';

export const derivative: ConfigFunction = (str: string) => {
  switch (str) {
    case 'sin':
      return 'cos';
    case 'cos':
      return '-sin';
    case 'tg':
      return '1/cos^2 * 1/';
    default:
      return str;
  }
};
