import { templatesConfig } from 'config';
import { OPTION } from './constants';

export function chooseTemplate (task: string, getRandomNumber: () => number) {
  const stableRandomNumber = getRandomNumber();

  return task.replace(/\[([^\]]*,.*?)]/g, (_, templatesString) => {
    const templates: string[] = templatesString.split(',');
    return `[${templates.at(stableRandomNumber % templates.length) as string}]`;
  });
}

export function replaceTemplate (task: string) {
  return task.replace(/\[(.*?)]/g, (_, template: string) => (
    Object.prototype.hasOwnProperty.call(templatesConfig.replacements, template)
      ? templatesConfig.replacements[template as keyof typeof templatesConfig.replacements]
      : `[${template}]`
  ));
}

export function replaceConstants (task: string, getRandomNumber: () => number) {
  const stableRandomNumber = getRandomNumber();

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

export function parseTask (task: string, getRandomNumber: () => number) {
  let previousParsedTask = '';
  let parsedTask = task;
  while (parsedTask !== previousParsedTask) {
    previousParsedTask = parsedTask;
    parsedTask = replaceTemplate(chooseTemplate(parsedTask, getRandomNumber));
  }
  return replaceConstants(parsedTask, getRandomNumber);
}

export function getNumberFromChar (char: string, min: number, max: number) {
  const charCode = char.charCodeAt(0);
  const range = max - min;
  return charCode % range + min;
}

export function createHashFunction (hash: string) {
  let counter = 0;

  return function getRandomNumber () {
    if (counter > hash.length) {
      counter = 0;
    }
    const { constMin, constMax } = templatesConfig.bounds;
    const numberFromChar = getNumberFromChar(hash[counter], constMin, constMax);
    counter += 1;
    return numberFromChar;
  };
}

export const getRandomNumber = createHashFunction(OPTION.userHash);
