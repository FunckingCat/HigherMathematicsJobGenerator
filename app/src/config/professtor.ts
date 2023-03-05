export const PROFESSOR_CONFIG = {
  task_sections: [
    {
      id: 1,
      name: 'Метод замены переменной',
      formulas: [
        {
          id: 1,
          formula: '\\int{f(g(x))g\'(x)}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Простой',
          task: '\\int{sin(3x+1)}dx, \\int{\\frac{dx}{5-2x}}, \\int{e^{3x}}dx',
          value: ''
        },
        {
          id: 2,
          difficult: 'Средний',
          task: '\\int{\\frac{sin(7\\sqrt{x}-2)}{\\sqrt{x}}}dx, ' +
            '\\int{\\frac{coslnx}{x}}dx, \\int{\\frac{3^xdx}{2\\cdot3^{2x}+2}}',
          value: ''
        },
        {
          id: 3,
          difficult: 'Cложный',
          task: '\\int{\\frac{dx}{\\sqrt{1+2e^x}}}, ' +
            '\\int{\\frac{3^x+2}{3^x-5}}dx, \\int{\\frac{\\sqrt[6]{x}dx}{5+\\sqrt[3]{x}}}',
          value: ''
        }
      ]
    },
    {
      id: 2,
      name: 'Метод интегрирования по частям',
      formulas: [
        {
          id: 1,
          formula: '\\int{udv} = uv - \\int{vdu}'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Простой',
          task: '\\int{x^2cosx}dx, \\int{xe^x}dx, \\int{lnx}dx',
          value: ''
        },
        {
          id: 2,
          difficult: 'Средний',
          task: '\\int{e^{\\sqrt{3x+1}}}dx, \\int{(x^2+3x)sin2x}dx, \\int{12^xarctg12^x}dx',
          value: ''
        },
        {
          id: 3,
          difficult: 'Cложный',
          task: '\\int{ln(2x^2+x+4)}dx, \\int{x^2arctg(3x^3+1)}dx, \\int{\\frac{dx}{(x^2+3^2)^4}}',
          value: ''
        }
      ]
    },
    {
      id: 3,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int{f(x)e^{kx}}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Выбрать',
          task: '\\int{e^{5x}cos4x}dx, \\int{e^xsin3x}dx',
          value: ''
        }
      ]
    },
    {
      id: 4,
      name: 'Интегрирование рациональных дробей',
      formulas: [
        {
          id: 1,
          formula: '\\int\\frac{P(x)}{Q(x)},\\ ' +
            'где\\ P\\ и\\ Q\\ -\\ многочлены\\ степени\\ m\\ и\\ n'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'm < n; Q(x) раскладывается на множители 1 степени',
          task: '\\int{\\frac{(x-3)dx}{(x-2)(x+3)}}, \\int{\\frac{xdx}{(x^2-5x+6)}}',
          value: ''
        },
        {
          id: 2,
          difficult: 'm < n; Q(x) раскладывается на множители 1 степени и 2',
          task: '\\int{\\frac{(3x+1)dx}{(x-1)(x^2+3x)+15}}, \\int{\\frac{dx}{(x^3-8)}}',
          value: ''
        },
        {
          id: 3,
          difficult: 'm > n',
          task: '\\int{\\frac{(x^4-3)dx}{x^2+2x+1}}',
          value: ''
        }
      ]
    },
    {
      id: 5,
      name: 'Универсальная Тригонометрическая подстановка',
      formulas: [
        {
          id: 1,
          formula: '\\int\\frac{dx}{asinx+bcosx+c}'
        },
        {
          id: 2,
          formula: '\\int\\frac{dx}{asinkx+bcoskx+c}'
        },
        {
          id: 3,
          formula: '\\int\\frac{dx}{asin^mkx+bcos^nkx+c},\\  где\\ m\\ +\\ n\\ =\\ 3'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: '1',
          task: '\\int\\frac{dx}{sinx+3cosx}, \\int\\frac{dx}{2sinx+cosx+1}',
          value: ''
        },
        {
          id: 2,
          difficult: '2',
          task: '\\int\\frac{dx}{2sin3x+cos3x+7}',
          value: ''
        },
        {
          id: 3,
          difficult: '3',
          task: '\\int\\frac{dx}{sin3x+7cos^23x+5}',
          value: ''
        }
      ]
    },
    {
      id: 6,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}\\ ' +
            'или \\int\\frac{cosxdx}{\\sqrt{asin^2x+bcos^2x}}'
        },
        {
          id: 2,
          formula: '\\int\\frac{sin^mxdx}{(cosx+c)^n)},\\ где\\ m\\ -\\ нечетное'
        },
        {
          id: 3,
          formula: '\\int\\frac{sin^mxdx}{cos^nx}, \\int{sin^mxcos^nxdx},' +
            '\\int{tg^mxcos^nxdx},\\ где\\ m\\ и\\ n\\ четные\\ (могут\\ быть\\ равны\\ 0)'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: '1',
          task: '\\int\\frac{cosxdx}{\\sqrt{3sin^2x+7cos^2x}}',
          value: ''
        },
        {
          id: 2,
          difficult: '2',
          task: '\\int\\frac{sin^3xdx}{cosx-3}',
          value: ''
        },
        {
          id: 3,
          difficult: '3',
          task: '\\int{tg^65xdx}, \\int{\\frac{dx}{sin^63x}}',
          value: ''
        }
      ]
    },
    {
      id: 7,
      name: 'Частные варианты интегрирования тригонометрических функций 2.0',
      formulas: [
        {
          id: 1,
          formula: '\\int{sinax}\\cdot{cosbx}dx'
        },
        {
          id: 2,
          formula: '\\int{sinax}\\cdot{cosbx}\\cdot{sincx}dx\\ или \\int{sinax}\\cdot{cos^2bx}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Простой',
          task: '\\int{sin2x}\\cdot{cos3x}dx',
          value: ''
        },
        {
          id: 2,
          difficult: 'Средний',
          task: '\\int{sin2x}\\cdot{cos4x}\\cdot{sin5x}dx, \\int{sin7x}\\cdot{cos^24x}dx',
          value: ''
        }
      ]
    },
    {
      id: 8,
      name: 'Частные варианты интегрирования тригонометрических функций 3.0',
      formulas: [
        {
          id: 1,
          formula: '\\int{sin^mx}\\cdot{cos^nx}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: '1',
          task: '\\int{sin^4x}\\cdot{cos^5x}dx, ' +
            '\\int{\\frac{cos^56x}{sin^86x}}dx,\\ m\\ /\\ n\\ -\\ нечетная\\ степень',
          value: ''
        },
        {
          id: 2,
          difficult: '2',
          task: '\\int{\\frac{cos^4x}{sin^6x}}dx,\\ m\\ и\\ n\\ -\\ чётные',
          value: ''
        },
        {
          id: 3,
          difficult: '3',
          task: '\\int{\\frac{sin^2x}{cos^62x}}dx, ' +
            '\\int{\\frac{\\sqrt[3]{cosx}}{\\sqrt[3]{cos^{13}x}}}dx',
          value: ''
        }
      ]
    },
    {
      id: 9,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int{R(x,x^{\\frac{p1}{q1}},,x^{\\frac{p2}{q2}}, ..., ,x^{\\frac{pn}{qn}})}dx'
        },
        {
          id: 2,
          formula: '\\int{R(x,(\\frac{ax+b}{cx+d})^{\\frac{p1}{q1}}, ' +
            '(\\frac{ax+b}{cx+d})^{\\frac{p2}{q2}}, ...,(\\frac{ax+b}{cx+d})^{\\frac{pn}{qn}})}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: '1',
          task: '\\int{\\frac{x+\\sqrt[3]{x^2}+\\sqrt[6]{x}}{x(1+\\sqrt[3]{x})}}dx',
          value: ''
        },
        {
          id: 2,
          difficult: '2',
          task: '\\int{\\frac{1}{(1-x)^2}\\cdot{\\sqrt{\\frac{1-x}{1+x}}}}dx',
          value: ''
        }
      ]
    },
    {
      id: 10,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}'
        },
        {
          id: 2,
          formula: '\\int{\\frac{(nx+m)dx}{\\sqrt{ax^2+bx+c}}}'
        },
        {
          id: 3,
          formula: '\\int{\\frac{dx}{(x+d)\\sqrt{ax^2+bx+c}}}'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Простой',
          task: '\\int{\\frac{dx}{\\sqrt{x^2+8x+13}}}dx',
          value: ''
        },
        {
          id: 2,
          difficult: 'Средний',
          task: '\\int{\\frac{(x+5)dx}{\\sqrt{x^2+x+1}}}',
          value: ''
        },
        {
          id: 3,
          difficult: 'Сложный',
          task: '\\int{\\frac{dx}{(x+8)\\sqrt{x^2-5x-2}}}',
          value: ''
        }
      ]
    },
    {
      id: 11,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int{R(x,\\sqrt{a^2-x^2})}dx'
        },
        {
          id: 2,
          formula: '\\int{R(x,\\sqrt{x^2+a^2})}dx'
        },
        {
          id: 3,
          formula: '\\int{R(x,\\sqrt{x^2-a^2})}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: '1',
          task: '\\int{\\frac{dx}{\\sqrt{(2-x^2)^3}}}, \\int{\\frac{x^2dx}{\\sqrt{3-x^2}}}',
          value: ''
        },
        {
          id: 2,
          difficult: '2',
          task: '\\int{\\frac{dx}{x^2\\sqrt{x^2+7}}}, \\int{\\frac{\\sqrt{4+x^2}}{x^4}}',
          value: ''
        },
        {
          id: 3,
          difficult: '3',
          task: '\\int{\\frac{dx}{(x^2+2)\\sqrt{x^2-1}}}, \\int{\\frac{\\sqrt{x^2-17}}{x^2}}',
          value: ''
        }
      ]
    },
    {
      id: 12,
      name: '',
      formulas: [
        {
          id: 1,
          formula: '\\int{R(x, \\sqrt{ax^2+bx+c})}dx'
        }
      ],
      tasks: [
        {
          id: 1,
          difficult: 'Простой',
          task: '\\int{\\frac{dx}{\\sqrt{(5+2x+x^2)^3}}}',
          value: ''
        },
        {
          id: 2,
          difficult: 'Средний',
          task: '\\int{(x+1)\\sqrt{x^2+4x+1}}dx',
          value: ''
        },
        {
          id: 3,
          difficult: 'Сложный',
          task: '\\int{x^2\\sqrt{8-x^2}}dx',
          value: ''
        }
      ]
    }
  ]
};
