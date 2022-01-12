import produce from 'immer';
import { nanoid } from 'nanoid';
import { createContext, useContext, useReducer } from 'react';

import { Action, ActionTypes } from './actions';
import { ColorThemes } from './theme';

type Id = string;

interface ITodo {
  id: Id;
  task: string;
  completed: boolean;
}

interface IGlobalState {
  colorTheme: ColorThemes;
  todos: ITodo[];
}

const initialState: IGlobalState = {
  colorTheme: ColorThemes.dark,
  todos: [
    {
      id: nanoid(),
      task: 'Complete online JavaScript course',
      completed: true,
    },
    { id: nanoid(), task: 'Jog around the park 3x', completed: false },
    { id: nanoid(), task: '10 minutes meditation', completed: false },
    { id: nanoid(), task: 'Read for 1 hour', completed: false },
    { id: nanoid(), task: 'Pick up groceries', completed: false },
    {
      id: nanoid(),
      task: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ],
};

const reducer = produce((state: IGlobalState, action: Action): void => {
  switch (action.type) {
    case ActionTypes.setColorTheme: {
      state.colorTheme = action.payload;
      break;
    }
    default:
      break;
  }
});

const stateContext = createContext<[IGlobalState, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const useGlobalState = (): [IGlobalState, React.Dispatch<Action>] => {
  return useContext(stateContext);
};

const GlobalState: React.FC = ({ children }) => {
  const state = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={state}>{children}</stateContext.Provider>
  );
};

export default GlobalState;
