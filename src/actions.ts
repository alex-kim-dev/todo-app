import { ColorThemes, Filters, Id } from './types';

export enum ActionTypes {
  setColorTheme = 'SET_COLOR_THEME',
  addTodo = 'ADD_TODO',
  toggleTodoCompletion = 'TOGGLE_TASK_COMPLETION',
  deleteTodo = 'DELETE_TODO',
  clearCompleted = 'CLEAR_COMPLETED',
  setFilter = 'SET_FILTER',
  reorderTodos = 'REORDER_TODOS',
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

interface ISetFilter {
  type: ActionTypes.setFilter;
  payload: Filters;
}

interface IReorderTodos {
  type: ActionTypes.reorderTodos;
  payload: { move: Id; after: Id };
}

export type Action =
  | ISetColorTheme
  | IAddTodo
  | IToggleTodoCompletion
  | IDeleteTodo
  | IClearCompleted
  | ISetFilter
  | IReorderTodos;

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

export const setFilter = (value: Filters): ISetFilter => ({
  type: ActionTypes.setFilter,
  payload: value,
});

export const reorderTodos = (value: {
  move: Id;
  after: Id;
}): IReorderTodos => ({
  type: ActionTypes.reorderTodos,
  payload: value,
});
