import { ColorThemes, Filters, ID } from './types';

export enum ActionTypes {
  setColorTheme = 'SET_COLOR_THEME',
  addTodo = 'ADD_TODO',
  toggleTodoCompletion = 'TOGGLE_TASK_COMPLETION',
  deleteTodo = 'DELETE_TODO',
  clearCompleted = 'CLEAR_COMPLETED',
  setFilter = 'SET_FILTER',
  reorderTodos = 'REORDER_TODOS',
}

interface ActionSetColorTheme {
  type: ActionTypes.setColorTheme;
  payload: ColorThemes;
}

interface ActionAddTodo {
  type: ActionTypes.addTodo;
  payload: string;
}

interface ActionToggleTodoCompletion {
  type: ActionTypes.toggleTodoCompletion;
  payload: ID;
}

interface ActionDeleteTodo {
  type: ActionTypes.deleteTodo;
  payload: ID;
}

interface ActionClearCompleted {
  type: ActionTypes.clearCompleted;
}

interface ActionSetFilter {
  type: ActionTypes.setFilter;
  payload: Filters;
}

interface ActionReorderTodos {
  type: ActionTypes.reorderTodos;
  payload: { move: ID; after: ID };
}

export type Action =
  | ActionSetColorTheme
  | ActionAddTodo
  | ActionToggleTodoCompletion
  | ActionDeleteTodo
  | ActionClearCompleted
  | ActionSetFilter
  | ActionReorderTodos;

export const setColorTheme = (
  colorTheme: ColorThemes,
): ActionSetColorTheme => ({
  type: ActionTypes.setColorTheme,
  payload: colorTheme,
});

export const addTodo = (text: string): ActionAddTodo => ({
  type: ActionTypes.addTodo,
  payload: text,
});

export const toggleTodoCompletion = (id: ID): ActionToggleTodoCompletion => ({
  type: ActionTypes.toggleTodoCompletion,
  payload: id,
});

export const deleteTodo = (id: ID): ActionDeleteTodo => ({
  type: ActionTypes.deleteTodo,
  payload: id,
});

export const clearCompleted = (): ActionClearCompleted => ({
  type: ActionTypes.clearCompleted,
});

export const setFilter = (value: Filters): ActionSetFilter => ({
  type: ActionTypes.setFilter,
  payload: value,
});
