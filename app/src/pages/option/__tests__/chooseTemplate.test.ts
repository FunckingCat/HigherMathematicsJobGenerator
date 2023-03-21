import { chooseTemplate, createHashFunction } from '../helpers';

test('no templates to choose from', () => {
  const task = 'Шаблон задания 5';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const getRandomNumber = createHashFunction(userHash);
  const result = chooseTemplate(task, getRandomNumber);
  expect(result).toBe(task);
});

test('templates to choose from but the first hash symbol is 3', () => {
  const task = '[cos,sin] + [kx][power] + [cos,sin,tg]';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const getRandomNumber = createHashFunction(userHash);
  const result = chooseTemplate(task, getRandomNumber);
  expect(result).toBe('[sin] + [kx][power] + [sin]');
});

test('templates to choose from but the first hash symbol is 4', () => {
  const task = '[cos,sin] + [kx][power] + [cos,sin,tg]';
  const userHash = '409ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const getRandomNumber = createHashFunction(userHash);
  const result = chooseTemplate(task, getRandomNumber);
  expect(result).toBe('[cos] + [kx][power] + [tg]');
});
