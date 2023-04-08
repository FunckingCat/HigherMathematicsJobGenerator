export const TASKS_CONFIGURATION = [
  {
    section: 'integrals',
    section_name: 'Задания по интегралам',
    templates: [
      {
        id: 1,
        name: 'Метод замены переменной',
        view: "\\int{f(g(x))g'(x)}dx",
        template: '[kx] + [sin,cos]'
      },
      {
        id: 2,
        name: 'Метод интегрирования по частям',
        view: '\\int{udv} = uv - \\int{vdu}',
        template: '[kx] + x[power]'
      },
      {
        id: 3,
        name: 'Тут может быть любое название',
        view: '\\int{f(x)e^{kx}}dx',
        template: '[kx] + [sin,cos,tg]'
      },
      {
        id: 4,
        name: 'Интегрирование рациональных дробей',
        view: '\\int\\frac{P(x)}{Q(x)}',
        template: '[kx] + [sin,cos,(-5:15)]'
      },
      {
        id: 5,
        name: 'Универсальная Тригонометрическая подстановка',
        view: '\\int\\frac{dx}{asinx+bcosx+c}',
        template: '[kx] + [10:20]'
      },
      {
        id: 6,
        name: '',
        view: '\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 7,
        name: 'Частные варианты интегрирования тригонометрических функций 2.0',
        view: '\\int{sinax}\\cdot{cosbx}dx',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 8,
        name: 'Частные варианты интегрирования тригонометрических функций 3.0',
        view: '\\int{sin^mx}\\cdot{cos^nx}dx',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 9,
        name: '',
        view: '\\int{R(x,x^{\\frac{p1}{q1}},,x^{\\frac{p2}{q2}}, ..., ,x^{\\frac{pn}{qn}})}dx',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 10,
        name: '',
        view: '\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 11,
        name: '',
        view: '\\int{R(x,\\sqrt{a^2-x^2})}dx',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 12,
        name: '',
        view: '\\int{R(x, \\sqrt{ax^2+bx+c})}dx',
        template: '[kx] + [sin,cos]'
      }
    ]
  },
  {
    section: 'proizvodnie',
    section_name: 'Задания по производным',
    templates: [
      {
        id: 13,
        name: 'Найти производную функции $y = f(x)$',
        view: '2sin^5 3x + \\sqrt{ln(3x - x^2)}',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 14,
        name: 'Найти производные функций заданных параметрически',
        view: 'x = e^t sint',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 15,
        name: 'Найти производные функций заданных неявно',
        view: 'tg(y + x) = x^y',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 16,
        name: 'Найти производную второго порядка функции $y = f(x)$',
        view: 'y = cos^2 x^2',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 17,
        name: 'Написать уравнения касательной и нормали к графику функции $y = f(x)$ в точке с абсциссой $x_0$',
        view: 'y = x^3 - 3x + 2; x_0 = 2',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 18,
        name: 'Вычислить с помощью дифференциала',
        view: 'tg48^\\degree',
        template: '[kx] + [sin,cos]'
      },
      {
        id: 19,
        name: 'Найти наибольшее и наименьшее значения функции $y = f(x)$ на отрезке $[a; b]$',
        view: 'y = sqrt{(1 - x^2)(1 + 2x^2)}, [-1; 1]',
        template: '[kx] + [sin,cos]'
      }
    ]
  }
];
