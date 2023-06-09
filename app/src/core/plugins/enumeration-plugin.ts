import { BasePlugin } from './base-plugin';
import { type ChangedTemplate, type Enumeration, type Filter, type Token } from './types';

/**
 * Данный плагин берет рандомное значение из перечисления
 * например [1,2,3,5,8|odd] -> 5
 */
export class EnumerationPlugin extends BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    return this.changedTemplate.map((token) => {
      if (!this.isEnumeration(token)) return token;

      const { arr, filterName } = this.parseEnumeration(token);

      let filteredArray: string[] = [];

      if (filterName) {
        filteredArray = this.filterArray(arr.map(Number), filterName).map(String);
      }

      const totalArray = filterName ? filteredArray : arr;

      return {
        ...token,
        value: this.getRandomElement(totalArray)
      };
    });
  }

  /**
   * Проверяет, что токен является перечислением, например, [1,5,8] -> true
   */
  private isEnumeration (token: string | Token): token is Token {
    if (typeof token === 'string') return false;

    const { original } = token;

    const [start, end] = this.generateArrayFromString(original);

    // если имеется хотя бы 2 слова, разделенных запятой, то это перечисление
    return !!start && !!end;
  }

  /**
   * Преобразует токен в массив из всех значений перечисления,
   * например [1,5,8] -> ['1', '5', '8']
   */
  private parseEnumeration (token: Token): Enumeration {
    const { original } = token;
    const [enumeration, filterName] = original.split('|');

    return {
      arr: this.generateArrayFromString(enumeration),
      filterName: filterName as Filter
    };
  }
}
