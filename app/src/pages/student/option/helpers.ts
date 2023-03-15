import { templatesConfig } from './constants';

function getRandomNumberFromHash (hash: string) {
  // TODO: Давид обещал получше реализовать эту функцию генерации случайного числа по hash
  return hash.slice(-1).charCodeAt(0);
}

export function chooseTemplate (task: string, userHash: string) {
  const stableRandomNumber = getRandomNumberFromHash(userHash);

  return task.replace(/\[([^\]]*,.*?)]/g, (_, templatesString) => {
    const templates: string[] = templatesString.split(',');
    return `[${templates[stableRandomNumber % templates.length]}]`;
  });
}

export function replaceTemplate (task: string) {
  return task.replace(/\[(.*?)]/g, (_, template) => (
    Object.prototype.hasOwnProperty.call(templatesConfig.replacements, template)
      ? templatesConfig.replacements[template as keyof typeof templatesConfig.replacements]
      : template
  ));
}

export function replaceConstants (task: string, userHash: string) {
  const stableRandomNumber = getRandomNumberFromHash(userHash);

  return task.replace(/\[(.*?)]/g, (_, template) => {
    if (template === 'const') {
      return stableRandomNumber;
    }
    if (template === 'odd') {
      return stableRandomNumber % 2 ? stableRandomNumber : stableRandomNumber + 1;
    }
    if (template === 'even') {
      return stableRandomNumber % 2 ? stableRandomNumber + 1 : stableRandomNumber;
    }
    return template;
  });
}

export function parseTask (task: string, userHash: string) {
  return replaceConstants(replaceTemplate(chooseTemplate(task, userHash)), userHash);
}
