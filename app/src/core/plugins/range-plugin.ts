import { BasePlugin } from './base-plugin';
import { type ChangedTemplate, type Filter, type Token, type Range } from './types';

/**
 * Данный плагин преобразует шаблон, заданный диапозоном, в число,
 * например [4:10|odd] -> 7
 */
export class RangePlugin extends BasePlugin implements BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    return this.changedTemplate.map((token) => {
      if (!this.isRange(token)) return token;

      const { min, max, filterName } = this.parseRange(token);
      let arr = this.generateArrayFromMinMax(min, max);

      if (filterName) {
        arr = this.filterArray(arr, filterName);
      }

      return {
        ...token,
        value: this.getRandomElement(arr)
      };
    });
  }

  /**
   * Проверяет, что токен является диапозоном, например, [2:5|even] -> true
   */
  private isRange (token: string | Token): token is Token {
    if (typeof token === 'string') return false;

    const { original } = token;
    const [range] = original.split('|');
    const [, max] = range.split(':').map(Number);

    // Если задан не диапозон, то max не будет существовать
    return !!max;
  }

  /**
   * Парсит  токен на значения, например [2:5|even] -> { min: 2, max: 5, funcName: 'even' }
   */
  private parseRange (token: Token): Range {
    const { original } = token;
    const [range, filterName] = original.split('|');
    const [min, max] = range.split(':').map(Number);

    return {
      min,
      max,
      filterName: filterName as Filter
    };
  }
}
