export type Id = string;

export interface ITodo {
  id: Id;
  task: string;
  completed: boolean;
}

export enum ColorThemes {
  light = 'light',
  dark = 'dark',
}

export enum Filters {
  all = 'all',
  active = 'active',
  completed = 'completed',
}
