export const templatesConfig = {
  bounds: {
    constMin: -10,
    constMax: 10
  },
  replacements: {
    cos: '(cos(x))',
    tg: '(tg(x))',
    sin: '([odd] * sin([even] * x))',
    kx: '([const] * x)',
    power: '^{[const]}',
    ax: '([const] + [sin, cos] * x)'
  }
};
