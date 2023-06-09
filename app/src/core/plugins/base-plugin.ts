import { templateConfig } from 'config/templatesConfig';

import { type ChangedTemplate, type Filter } from './types';

export abstract class BasePlugin {
  protected readonly min = templateConfig.min;
  protected readonly max = templateConfig.max;
  protected readonly aliases = templateConfig.aliases;
  protected readonly defaultSymbol = templateConfig.defaultSymbol;
  protected readonly functions = templateConfig.functions;
  protected readonly filters = templateConfig.filters;
  protected readonly regex = new RegExp(`\\${templateConfig.separators.start}\\S.*?\\${templateConfig.separators.end}`, 'g');
  protected readonly originalTemplate: string;
  protected readonly changedTemplate: ChangedTemplate[] = [];
  protected readonly userHash: string;
  protected readonly serialNumber: number;
  private counter = 0;

  protected constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    this.originalTemplate = originalTemplate;
    this.changedTemplate = changedTemplate;
    this.userHash = userHash;
    this.serialNumber = serialNumber;
  }

  abstract init (): ChangedTemplate[];

  /**
   * Генерирует число исходя из строки
   */
  private getNumFromStr (str: string): number {
    let num = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);

      num = ((num << 5) - num) + char;
      num &= num;
    }

    return num;
  }

  /**
   * Генерирует рандомное число исходя из строки и какого-то числа
   */
  private getRandomNumByStrAndSerialNum (str: string, serialNum: number): number {
    const num = this.getNumFromStr(str + serialNum.toString());
    const convertedNum = Math.sin(num) * 10000;

    return Math.floor((convertedNum - Math.floor(convertedNum)) * 100);
  }

  /**
   * Берет элемент из массива по индексу, даже если индекс больше длины массива
   */
  private getItemFromArrayByIndex<T extends string | number> (arr: T[], index: number): T {
    return arr[index % arr.length];
  }

  /**
   * Генерирует массив, заполненный элеметами от минимального до максимального
   */
  protected generateArrayFromMinMax (min: number, max: number): number[] {
    const arr = [];

    for (let i = min; i <= max; i++) {
      arr.push(i);
    }

    return arr;
  }

  /**
   * Генерирует массив из строки, например 'sin,cos,tg' -> ['sin', 'cos', 'tg']
   */
  protected generateArrayFromString (str: string, separator = ','): string[] {
    return str.split(separator);
  }

  /**
   * Фильтрует массив по заданному фильтру
   */
  protected filterArray (arr: number[], filterName: Filter): number[] {
    return arr.filter(this.filters[filterName]);
  }

  /**
   * Возвращает случайный элемент из заданного массива исходя из хэша студента и порядкового номера уравнения
   */
  protected getRandomElement<T extends string | number> (arr: T[]): T {
    const randomNum = this.getRandomNumByStrAndSerialNum(this.userHash, this.serialNumber + this.counter++);

    return this.getItemFromArrayByIndex(arr, randomNum);
  }
}
