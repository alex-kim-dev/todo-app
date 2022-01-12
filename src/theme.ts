export enum ColorThemes {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  palette: {
    accent: string;
    bgGradient: { from: string; to: string };
    muted: string;
    white: string;
    bgPrimary: string;
    bgSecondary: string;
    bgHover: string;
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
    bgSecondary: 'hsl(0, 0%, 100%)',
    bgHover: 'hsl(233, 11%, 84%)',
    text: 'hsl(235, 19%, 35%)',
    muted: 'hsl(234, 39%, 85%)',
  },
  [ColorThemes.dark]: {
    bgPrimary: 'hsl(235, 21%, 11%)',
    bgSecondary: 'hsl(235, 24%, 19%)',
    bgHover: 'hsl(235, 21%, 11%)',
    text: 'hsl(234, 39%, 85%)',
    muted: 'hsl(233, 14%, 35%)',
  },
};

const getTheme = (colorTheme: ColorThemes): ITheme => ({
  palette: {
    accent: 'hsl(220, 98%, 61%)',
    bgGradient: { from: 'hsl(192, 100%, 67%)', to: 'hsl(280, 87%, 65%)' },
    white: 'hsl(0, 0%, 100%)',
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
