export const TASKS_CONFIGURATION = [
  {
    section: 'integrals',
    section_name: 'Задания по интегралам',
    templates: [
      {
        id: 1,
        name: 'Метод замены переменной',
        view: "\\int{f(g(x))g'(x)}dx",
        template: ''
      },
      {
        id: 2,
        name: 'Метод интегрирования по частям',
        view: '\\int{udv} = uv - \\int{vdu}',
        template: ''
      },
      {
        id: 3,
        name: '',
        view: '\\int{f(x)e^{kx}}dx',
        template: ''
      },
      {
        id: 4,
        name: 'Интегрирование рациональных дробей',
        view: '\\int\\frac{P(x)}{Q(x)},\\ где\\ P\\ и\\ Q\\ -\\ многочлены\\ степени\\ m\\ и\\ n',
        template: ''
      },
      {
        id: 5,
        name: 'Универсальная Тригонометрическая подстановка',
        view: '\\int\\frac{dx}{asinx+bcosx+c}',
        template: ''
      },
      {
        id: 6,
        name: '',
        // eslint-disable-next-line max-len
        view: '\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}\\ или \\int\\frac{cosxdx}{\\sqrt{asin^2x+bcos^2x}}',
        template: ''
      },
      {
        id: 7,
        name: 'Частные варианты интегрирования тригонометрических функций 2.0',
        view: '\\int{sinax}\\cdot{cosbx}dx',
        template: ''
      },
      {
        id: 8,
        name: 'Частные варианты интегрирования тригонометрических функций 3.0',
        view: '\\int{sin^mx}\\cdot{cos^nx}dx',
        template: ''
      },
      {
        id: 9,
        name: '',
        view: '\\int{R(x,x^{\\frac{p1}{q1}},,x^{\\frac{p2}{q2}}, ..., ,x^{\\frac{pn}{qn}})}dx',
        template: ''
      },
      {
        id: 10,
        name: '',
        view: '\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}',
        template: ''
      },
      {
        id: 11,
        name: '',
        view: '\\int{R(x,\\sqrt{a^2-x^2})}dx',
        template: ''
      },
      {
        id: 12,
        name: '',
        view: '\\int{R(x, \\sqrt{ax^2+bx+c})}dx',
        template: ''
      }
    ]
  }
  // integrals: [
  //   {
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int\\frac{dx}{asinx+bcosx+c}"
  //       },
  //       {
  //         id: 2,
  //         formula: "\\int\\frac{dx}{asinkx+bcoskx+c}"
  //       },
  //       {
  //         id: 3,
  //         formula: "\\int\\frac{dx}{asin^mkx+bcos^nkx+c},\\  где\\ m\\ +\\ n\\ =\\ 3"
  //       }
  //     ],
  //   {
  //     id: 6,
  //     name: "",
  //     formulas: [
  //       {
  //         id: 1,
  // eslint-disable-next-line max-len
  //         formula: "\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}\\ или \\int\\frac{cosxdx}{\\sqrt{asin^2x+bcos^2x}}"
  //       },
  //       {
  //         id: 2,
  //         formula: "\\int\\frac{sin^mxdx}{(cosx+c)^n)},\\ где\\ m\\ -\\ нечетное"
  //       },
  //       {
  //         id: 3,
  // eslint-disable-next-line max-len
  //         formula: "\\int\\frac{sin^mxdx}{cos^nx}, \\int{sin^mxcos^nxdx}, \\int{tg^mxcos^nxdx},\\ где\\ m\\ и\\ n\\ четные\\ (могут\\ быть\\ равны\\ 0)"
  //       }
  //     ],
  //   {
  //     id: 7,
  //     name: "Частные варианты интегрирования тригонометрических функций 2.0",
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int{sinax}\\cdot{cosbx}dx"
  //       },
  //       {
  //         id: 2,
  //         formula: "\\int{sinax}\\cdot{cosbx}\\cdot{sincx}dx\\ или \\int{sinax}\\cdot{cos^2bx}dx"
  //       }
  //     ],
  //   },
  //   {
  //     id: 8,
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int{sin^mx}\\cdot{cos^nx}dx"
  //       }
  //     ],
  //   {
  //     id: 9,
  //     name: "",
  //     formulas: [
  //       {
  //         id: 1,
  // eslint-disable-next-line max-len
  //         formula: "\\int{R(x,x^{\\frac{p1}{q1}},,x^{\\frac{p2}{q2}}, ..., ,x^{\\frac{pn}{qn}})}dx"
  //       },
  //       {
  //         id: 2,
  // eslint-disable-next-line max-len
  //         formula: "\\int{R(x,(\\frac{ax+b}{cx+d})^{\\frac{p1}{q1}}, (\\frac{ax+b}{cx+d})^{\\frac{p2}{q2}}, ...,(\\frac{ax+b}{cx+d})^{\\frac{pn}{qn}})}dx"
  //       }
  //     ],
  //   },
  //   {
  //     id: 10,
  //     name: "",
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}"
  //       },
  //       {
  //         id: 2,
  //         formula: "\\int{\\frac{(nx+m)dx}{\\sqrt{ax^2+bx+c}}}"
  //       },
  //       {
  //         id: 3,
  //         formula: "\\int{\\frac{dx}{(x+d)\\sqrt{ax^2+bx+c}}}"
  //       }
  //     ],
  //   },
  //   {
  //     id: 11,
  //     name: "",
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int{R(x,\\sqrt{a^2-x^2})}dx"
  //       },
  //       {
  //         id: 2,
  //         formula: "\\int{R(x,\\sqrt{x^2+a^2})}dx"
  //       },
  //       {
  //         id: 3,
  //         formula: "\\int{R(x,\\sqrt{x^2-a^2})}dx"
  //       }
  //     ],
  //   },
  //   {
  //     id: 12,
  //     name: "",
  //     formulas: [
  //       {
  //         id: 1,
  //         formula: "\\int{R(x, \\sqrt{ax^2+bx+c})}dx"
  //       }
  //     ],
  //   }
  // ]
];
