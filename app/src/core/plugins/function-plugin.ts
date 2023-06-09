import { BasePlugin } from './base-plugin';
import { type ChangedTemplate, type FunctionName, type MathFunction, type Token } from './types';

/**
 * Данный плагин преобразует функции в значения
 * например [trig](x) dx [der(0)] -> sin(x) dx -cos(x)
 */
export class FunctionPlugin extends BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    return this.changedTemplate.map((token) => {
      if (!this.isFunction(token)) return token;

      const { functionName, arg } = this.parsefunction(token);

      const findToken = (token: ChangedTemplate): token is Token => {
        if (typeof token === 'string') return false;

        return token.index === arg;
      };

      const convertibleToken = this.changedTemplate.find(findToken);

      if (!convertibleToken) {
        throw new Error(`Токен по индексу ${arg}, который задан в функции ${functionName} не найден`);
      }

      const { value } = convertibleToken;

      if (value === null) {
        throw new Error(`Токен по индексу ${arg}, который задан в функции ${functionName} не имеет значения`);
      }

      return {
        ...token,
        value: this.functions[functionName](value)
      };
    });
  }

  /**
   * Проверяет, что токен является функцией, например, [der(0)] -> true
   */
  private isFunction (token: string | Token): token is Token {
    if (typeof token === 'string') return false;

    const { original } = token;
    const [functionName] = original.split('(');

    return functionName in this.functions;
  }

  /**
   * Преобразует токен в объект из имени функции и её аргумента,
   * например [der(0)] -> { functionName: 'der', arg: 0 }
   */
  private parsefunction (token: Token): MathFunction {
    const { original } = token;
    const [functionName, args] = original.split('(');
    const [arg] = args.split(')').map(Number);

    return {
      functionName: functionName as FunctionName,
      arg
    };
  }
}
