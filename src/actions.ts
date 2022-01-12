import { ColorThemes } from './theme';
import { Id } from './types';

export enum ActionTypes {
  setColorTheme = 'SET_COLOR_THEME',
  addTodo = 'ADD_TODO',
  toggleTodoCompletion = 'TOGGLE_TASK_COMPLETION',
  deleteTodo = 'DELETE_TODO',
  clearCompleted = 'CLEAR_COMPLETED',
}

interface ISetColorTheme {
  type: ActionTypes.setColorTheme;
  payload: ColorThemes;
}

interface IAddTodo {
  type: ActionTypes.addTodo;
  payload: string;
}

interface IToggleTodoCompletion {
  type: ActionTypes.toggleTodoCompletion;
  payload: Id;
}

interface IDeleteTodo {
  type: ActionTypes.deleteTodo;
  payload: Id;
}

interface IClearCompleted {
  type: ActionTypes.clearCompleted;
}

export type Action =
  | ISetColorTheme
  | IAddTodo
  | IToggleTodoCompletion
  | IDeleteTodo
  | IClearCompleted;

export const setColorTheme = (colorTheme: ColorThemes): ISetColorTheme => ({
  type: ActionTypes.setColorTheme,
  payload: colorTheme,
});

export const addTodo = (text: string): IAddTodo => ({
  type: ActionTypes.addTodo,
  payload: text,
});

export const toggleTodoCompletion = (id: Id): IToggleTodoCompletion => ({
  type: ActionTypes.toggleTodoCompletion,
  payload: id,
});

export const deleteTodo = (id: Id): IDeleteTodo => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});

export const clearCompleted = (): IClearCompleted => ({
  type: ActionTypes.clearCompleted,
});
