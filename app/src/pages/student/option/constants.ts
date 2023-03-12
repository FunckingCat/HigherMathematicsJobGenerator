export const OPTION = {
  user: 'Иванов Иван 211-321',
  optionCode: 'Jhbsr234hrbfAJDXNCBkjwh43bJSDB==',
  tasks: [
    {
      id: 5,
      amount: 1
    },
    {
      id: 2,
      amount: 1
    }
  ],
  userHash: '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86' +
    'd4cd86f4e0b87b20eabe88305d65fd0ed5d93b81de5b5e76d03dcc48e5286e044b7f3'
};

export const TASKS = [
  {
    id: 5,
    name: 'Задание 5',
    template: 'Шаблон задания 5'
  },
  {
    id: 2,
    name: 'Задание 2',
    template: '[cos,sin] + [kx[power]]'
  }
];

export const templatesConfig = {
  bounds: {
    const_min: -10,
    const_max: 10,
    power_max: 4
  },
  replacements: {
    cos: 'cosx',
    sin: '[odd] * sin([even] * x)',
    kx: '[const] * x',
    power: '^[const]'
  }
};
