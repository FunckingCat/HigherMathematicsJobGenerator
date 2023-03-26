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
      }
    ]
  },
  {
    section: 'proizvodnie',
    section_name: 'Задания по производным',
    templates: [
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
        name: 'А еще если название не нужно его может и не быть',
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
  }
];
