import { replaceConstants } from '../helpers';

test('no constants to replace', () => {
  const task = 'Шаблон задания 5';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const result = replaceConstants(task, userHash);
  expect(result).toBe(task);
});

test('constants to replace', () => {
  const task = '([odd] * sin([even] * x)) + ([const] * x)^[const] + (tg(x))';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const result = replaceConstants(task, userHash);
  expect(result).toBe('(51 * sin(52 * x)) + (51 * x)^51 + (tg(x))');
});
