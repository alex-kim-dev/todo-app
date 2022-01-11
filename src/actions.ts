import { ColorThemes } from './theme';

export enum ActionTypes {
  setColorTheme = 'SET_COLOR_THEME',
}

interface ISetColorTheme {
  type: ActionTypes.setColorTheme;
  payload: ColorThemes;
}

export type Action = ISetColorTheme;

export const setColorTheme = (colorTheme: ColorThemes): ISetColorTheme => ({
  type: ActionTypes.setColorTheme,
  payload: colorTheme,
});
