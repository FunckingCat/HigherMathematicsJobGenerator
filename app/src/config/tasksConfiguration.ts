export interface ITask {
  id: number
  name: string
  view: string
  template: string
}

interface IConfiguration {
  section: string
  section_name: string
  tasks: ITask[]
}

export const TASKS_CONFIGURATION: IConfiguration[] = [
  {
    section: 'integrals',
    section_name: 'Задания по интегралам',
    tasks: [
      {
        id: 1,
        name: 'Метод замены переменной',
        view: "\\int{f(g(x))g'(x)}dx",
        template: '\\int{[trig]([@|even]x)}dx'
      },
      {
        id: 2,
        name: 'Метод интегрирования по частям',
        view: '\\int{udv} = uv - \\int{vdu}',
        template: '\\int{(x^{[2:5]} + [@|even] x) [trig] + [@|even] x} dx'
      },
      {
        id: 3,
        name: 'Тут может быть любое название',
        view: '\\int{f(x)e^{kx}}dx',
        template: '\\int{e^{[@|even]x} [trig][1:20]x} dx'
      },
      {
        id: 4,
        name: 'Интегрирование рациональных дробей',
        view: '\\int\\frac{P(x)}{Q(x)}',
        template: '\\int\\frac{{(x + [@|even]})dx}{x^[2:10] + [@|even]x + [@|even]}'
      },
      {
        id: 5,
        name: 'Универсальная Тригонометрическая подстановка',
        view: '\\int\\frac{dx}{asinx+bcosx+c}',
        template: '\\int\\frac{dx}{[@|odd]sinx + [@|even]cosx + [@|aboveZero]}'
      },
      {
        id: 13,
        name: 'Шаблон',
        view: '\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}',
        template: '\\int\\frac{[trig]dx}{\\sqrt{[2:5]sin^2x+[2:10]cos^2x}}'
      },
      {
        id: 14,
        name: 'Частные варианты интегрирования тригонометрических функций 2.0',
        view: '\\int{sinax}\\cdot{cosbx}dx',
        template: '\\int{sin[1:20]x ⋅ cos[1:20]x}{dx}'
      },
      {
        id: 15,
        name: 'Частные варианты интегрирования тригонометрических функций 3.0',
        view: '\\int{sin^mx}\\cdot{cos^nx}dx',
        template: '\\int{sin^{[2:10]}x ⋅ cos^{[2:10]}x}{dx}'
      },
      {
        id: 16,
        name: 'Шаблон',
        view: '\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}',
        template: '\\int{\\frac{dx}{\\sqrt{[@|withoutZero]x^2+[@|withoutZero]x+[@|withoutZero]}}}'
      }
    ]
  },
  {
    section: 'proizvodnie',
    section_name: 'Задания по производным',
    tasks: [
      {
        id: 6,
        name: 'Найти производную функции $y = f(x)$',
        view: '2sin^5 3x + \\sqrt{ln(3x - x^2)}',
        template: '[@|even]sin^{[2:3]} [3,5]x + \\sqrt{ln([1:7|odd]x - x^{[2:8|even]})}'
      },
      {
        id: 7,
        name: 'Найти производные функций заданных параметрически',
        view: 'x = e^t sint',
        template: 'x = [trig]^t x sint'
      },
      {
        id: 8,
        name: 'Найти производные функций заданных неявно',
        view: 'tg(y + x) = x^y',
        template: 'tg([10:100] + x) = x^{[@|even]}'
      },
      {
        id: 9,
        name: 'Найти производную второго порядка функции $y = f(x)$',
        view: 'y = cos^2 x^2',
        template: 'y = cos^{[1:20|even]} x^{[2:6]}'
      },
      {
        id: 10,
        name: 'Написать уравнения касательной и нормали к графику функции $y = f(x)$ в точке с абсциссой $x_0$',
        view: 'y = x^3 - 3x + 2; x_0 = 2',
        template: 'y = x^{[@|odd]} - [1:9|odd]x + [@|aboveZero]; x_0 = [@|even]'
      },
      {
        id: 11,
        name: 'Вычислить с помощью дифференциала',
        view: 'tg48^\\degree',
        template: '[trig][1:180]^\\degree'
      },
      {
        id: 12,
        name: 'Найти наибольшее и наименьшее значения функции $y = f(x)$ на отрезке $[a; b]$',
        view: 'y = \\sqrt{(1 - x^2)(1 + 2x^2)}, [-1; 1]',
        template: 'y = \\sqrt{(1 - x^{[@|even]})(1 + 2x^{[@|even]})}, [ [@|lessZero], [@|aboveZero] ]'
      }
    ]
  }
];
