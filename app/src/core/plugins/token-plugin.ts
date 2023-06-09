import { BasePlugin } from './base-plugin';
import { type ChangedTemplate } from './types';

/**
 * Данный плагин преобразует изначальную строку-шаблон в массив,
 * который состоит из строк, если в строке нет динамического контента,
 * либо же объект с информацией о динамическом контенте
 */
export class TokenPlugin extends BasePlugin implements BasePlugin {
  public constructor (originalTemplate: string, changedTemplate: ChangedTemplate[], userHash: string, serialNumber: number) {
    super(originalTemplate, changedTemplate, userHash, serialNumber);
  }

  public init () {
    return this.createChangedTemplate();
  }

  private createChangedTemplate (): ChangedTemplate[] {
    const matches = this.originalTemplate.match(this.regex);
    const changedTemplate: ChangedTemplate[] = [];

    if (!matches) {
      return [this.originalTemplate];
    }

    let lastIndex = 0;

    matches.forEach((match, index) => {
      const matchIndex = this.originalTemplate.indexOf(match, lastIndex);

      if (matchIndex > lastIndex) {
        changedTemplate.push(this.originalTemplate.substring(lastIndex, matchIndex));
      }

      changedTemplate.push({
        original: match.substring(1, match.length - 1),
        value: null,
        index
      });

      lastIndex = matchIndex + match.length;
    });

    if (lastIndex < this.originalTemplate.length) {
      changedTemplate.push(this.originalTemplate.substring(lastIndex));
    }

    return changedTemplate;
  }
}
