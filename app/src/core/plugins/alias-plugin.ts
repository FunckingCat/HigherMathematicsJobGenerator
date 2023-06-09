import { BasePlugin } from './base-plugin';
import { type ChangedTemplate, type Token, type Alias } from './types';

/**
 * Данный плагин берет рандомное значение из псевдонима
 * например [trig] -> 'sin'
 */
export class AliasPlugin extends BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    return this.changedTemplate.map((token) => {
      if (!this.isAlias(token)) return token;

      const arr = this.parseAlias(token);

      return {
        ...token,
        value: this.getRandomElement(arr)
      };
    });
  }

  /**
   * Проверяет, что токен является псевдонимом, например, [trig] -> true
   */
  private isAlias (token: string | Token): token is Token {
    if (typeof token === 'string') return false;

    const { original } = token;

    return original in this.aliases;
  }

  /**
   * Преобразует токен в массив из всех значений псевдонима,
   * например [trig] -> ['sin', 'cos', 'tg']
   */
  private parseAlias (token: Token): string[] {
    const { original } = token;

    return this.aliases[(original as Alias)];
  }
}
