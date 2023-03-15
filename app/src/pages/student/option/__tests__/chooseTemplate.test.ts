import { chooseTemplate } from '../helpers';

test('no templates to choose from', () => {
  const task = 'Шаблон задания 5';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const result = chooseTemplate(task, userHash);
  expect(result).toBe(task);
});

test('templates to choose from but the last hash symbol is 3', () => {
  const task = '[cos,sin] + [kx][power] + [cos,sin,tg]';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const result = chooseTemplate(task, userHash);
  expect(result).toBe('[sin] + [kx][power] + [cos]');
});

test('templates to choose from but the last hash symbol is 4', () => {
  const task = '[cos,sin] + [kx][power] + [cos,sin,tg]';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f4';
  const result = chooseTemplate(task, userHash);
  expect(result).toBe('[cos] + [kx][power] + [sin]');
});
