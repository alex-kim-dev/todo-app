import produce from 'immer';
import { nanoid } from 'nanoid';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { Action, ActionTypes } from './actions';
import { ColorThemes } from './theme';
import { Filters, Id } from './types';

interface ITodo {
  id: Id;
  task: string;
  completed: boolean;
}

interface IGlobalState {
  colorTheme: ColorThemes;
  todos: ITodo[];
  todosFilter: Filters;
}

const initialState: IGlobalState = {
  colorTheme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ColorThemes.dark
    : ColorThemes.light,
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
  todosFilter: Filters.all,
};

const reducer = produce((state: IGlobalState, action: Action): void => {
  switch (action.type) {
    case ActionTypes.setColorTheme: {
      state.colorTheme = action.payload;
      break;
    }

    case ActionTypes.addTodo: {
      const todo: ITodo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      break;
    }

    case ActionTypes.toggleTodoCompletion: {
      const todo = state.todos.find(({ id }) => id === action.payload);
      if (todo) todo.completed = !todo.completed;
      break;
    }

    case ActionTypes.deleteTodo: {
      const index = state.todos.findIndex(({ id }) => id === action.payload);
      if (index !== -1) state.todos.splice(index, 1);
      break;
    }

    case ActionTypes.clearCompleted: {
      const todos = state.todos.filter(({ completed }) => !completed);
      state.todos = todos;
      break;
    }

    case ActionTypes.setFilter: {
      state.todosFilter = action.payload;
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
  const [state, dispatch] = useReducer(reducer, initialState, (initState) => {
    try {
      const lsState = window.localStorage.getItem('global-state');
      return lsState ? JSON.parse(lsState) : initState;
    } catch (error) {
      console.error(
        "Local storage is not accessible, the app state won't be saved!",
      );
      return initState;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('global-state', JSON.stringify(state));
    } catch (error) {}
  }, [state]);

  const valueToPass = useMemo<[IGlobalState, React.Dispatch<Action>]>(
    () => [state, dispatch],
    [state],
  );

  return (
    <stateContext.Provider value={valueToPass}>
      {children}
    </stateContext.Provider>
  );
};

export default GlobalState;
