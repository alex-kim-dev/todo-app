export type ID = string;

export interface Todo {
  id: ID;
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
