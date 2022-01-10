export enum ColorThemes {
  light = 'light',
  dark = 'dark',
}

export interface Theme {
  palette: {
    accent: string;
    bgGradient: { from: string; to: string };
    bgPrimary: string;
    bgSecondary: string;
    text: string;
    colorTheme: ColorThemes;
  };
  mq: {
    smUp: string;
    mdUp: string;
    xlUp: string;
  };
}

/** @arg {number} breakpoint In pixels */
const minWidthMq = (breakpoint: number): string =>
  `@media (min-width: ${(breakpoint / 16).toFixed(2)}em)`;

const palettes = {
  [ColorThemes.light]: {
    bgPrimary: 'hsl(0, 0%, 98%)',
    bgSecondary: 'hsl(236, 33%, 92%)',
    text: 'hsl(235, 19%, 35%)',
  },
  [ColorThemes.dark]: {
    bgPrimary: 'hsl(235, 21%, 11%)',
    bgSecondary: 'hsl(0, 0%, 100%)',
    text: 'hsl(234, 39%, 85%)',
  },
};

const getTheme = (colorTheme: ColorThemes): Theme => ({
  palette: {
    accent: 'hsl(220, 98%, 61%)',
    bgGradient: { from: 'hsl(192, 100%, 67%)', to: 'hsl(280, 87%, 65%)' },
    ...(palettes[colorTheme] ?? {}),
    colorTheme,
  },
  mq: {
    smUp: minWidthMq(450),
    mdUp: minWidthMq(768),
    xlUp: minWidthMq(1440),
  },
});

export default getTheme;
