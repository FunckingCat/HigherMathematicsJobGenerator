import { createHashFunction, parseTask } from '../helpers';

test('no templates to choose from', () => {
  const task = '';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const getRandomNumber = createHashFunction(userHash);
  const result = parseTask(task, getRandomNumber);
  expect(result).toBe(task);
});

test('templates to choose from', () => {
  const task = '[ax]';
  const userHash = '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3c' +
    'a86d4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3';
  const getRandomNumber = createHashFunction(userHash);
  const result = parseTask(task, getRandomNumber);
  expect(result).toBe('(-9 + (-9 * sin(-8 * x)) * x)');
});
