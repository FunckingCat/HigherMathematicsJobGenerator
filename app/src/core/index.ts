import {
  TokenPlugin,
  RangePlugin,
  DefaultRangePlugin,
  type ChangedTemplate,
  AliasPlugin,
  EnumerationPlugin,
  FunctionPlugin
} from './plugins';
import { deleteBracketsForSingleVars, deletePluses, deleteSpaces, deleteZeros } from './handlers';

export class Parser {
  changedTemplate: ChangedTemplate[] = [];
  originalTemplate: string;
  userHash: string;
  serialNumber: number;

  plugins = [
    TokenPlugin,
    RangePlugin,
    DefaultRangePlugin,
    AliasPlugin,
    EnumerationPlugin,
    FunctionPlugin
  ];

  handlers = [
    deleteSpaces,
    deletePluses,
    deleteZeros,
    deleteBracketsForSingleVars
  ];

  protected constructor (template: string, userHash: string, serialNumber: number) {
    this.originalTemplate = template;
    this.userHash = userHash;
    this.serialNumber = serialNumber;
  }

  public static parse (template: string, userHash: string, serialNumber: number): string {
    const parser = new Parser(template, userHash, serialNumber);

    parser.plugins.forEach((Plugin) => {
      parser.changedTemplate = new Plugin(parser.originalTemplate, parser.changedTemplate, parser.userHash, parser.serialNumber).init();
    });

    let str = parser.getStringFromChangedTemplate();

    parser.handlers.forEach((handler) => {
      str = handler(str);
    });

    return str;
  }

  private getStringFromChangedTemplate (): string {
    const convertedTemplate = this.changedTemplate.map((token) => {
      if (typeof token === 'string') return token;

      const { value, original } = token;

      if (value === null) {
        throw new Error(`Ни один из плагинов не смог обработать этот токен: ${original}`);
      }

      return value;
    });

    return convertedTemplate.join('');
  }
}
