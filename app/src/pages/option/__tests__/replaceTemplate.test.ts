import { replaceTemplate } from '../helpers';

test('no templates to replace', () => {
  const task = 'Шаблон задания 5';
  const result = replaceTemplate(task);
  expect(result).toBe(task);
});

test('templates to replace', () => {
  const task = '[sin] + [kx][power] + [tg]';
  const result = replaceTemplate(task);
  expect(result).toBe('([odd] * sin([even] * x)) + ([const] * x)^{[const]} + (tg(x))');
});
