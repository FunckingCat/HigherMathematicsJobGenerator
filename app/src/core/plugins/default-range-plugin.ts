import { BasePlugin } from './base-plugin';
import { type ChangedTemplate, type Filter, type Token, type Range } from './types';

/**
 * Данный плагин берет рандомное значение из дефолтного диапозона
 * например [@|even] -> 4
 */
export class DefaultRangePlugin extends BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    return this.changedTemplate.map((token) => {
      if (!this.isDefaultSymbol(token)) return token;

      const { min, max, filterName } = this.parseDefaultSymbol(token);
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
   * Проверяет, что токен является дефолтным значением, например, [@|even] -> true
   */
  private isDefaultSymbol (token: string | Token): token is Token {
    if (typeof token === 'string') return false;

    const { original } = token;
    const [defaultSymbol] = original.split('|');

    return defaultSymbol === this.defaultSymbol;
  }

  /**
   * Парсит  токен на значения, например [@|even] -> { min: -20, max: 20, funcName: 'even' }
   */
  private parseDefaultSymbol (token: Token): Range {
    const { original } = token;
    const [, filterName] = original.split('|');

    return {
      min: this.min,
      max: this.max,
      filterName: filterName as Filter
    };
  }
}
