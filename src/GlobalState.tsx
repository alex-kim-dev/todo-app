import { produce } from 'immer';
import { nanoid } from 'nanoid';
import {
  createContext,
  type Dispatch,
  type FC,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { type Action, ActionTypes } from '~/actions';
import { ColorThemes, Filters, type Todo } from '~/types';

interface GlobalState {
  colorTheme: ColorThemes;
  todos: Todo[];
  todosFilter: Filters;
}

export const initialState: GlobalState = {
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

export const reducer = produce((state: GlobalState, action: Action): void => {
  switch (action.type) {
    case ActionTypes.setColorTheme: {
      state.colorTheme = action.payload;
      break;
    }

    case ActionTypes.addTodo: {
      const todo: Todo = {
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

    case ActionTypes.reorderTodos: {
      const { todos } = state;
      const moveIdx = todos.findIndex(({ id }) => id === action.payload.move);
      const afterIdx = todos.findIndex(({ id }) => id === action.payload.after);
      const [todoToMove] = todos.splice(moveIdx, 1);
      todos.splice(afterIdx, 0, todoToMove);
      break;
    }

    default:
      break;
  }
});

interface StateContextValue {
  state: GlobalState;
  dispatch: Dispatch<Action>;
}

export const stateContext = createContext<StateContextValue>({
  state: initialState,
  dispatch: () => {},
});

export const useGlobalState = (): StateContextValue => {
  return useContext(stateContext);
};

interface GlobalStateProps {
  children?: ReactNode;
}

export const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initState) => {
    try {
      const lsState = window.localStorage.getItem('global-state');
      return lsState ? (JSON.parse(lsState) as GlobalState) : initState;
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
    } catch (error) {
      return;
    }
  }, [state]);

  const contextValue = useMemo<StateContextValue>(
    () => ({ state, dispatch }),
    [state],
  );

  return (
    <stateContext.Provider value={contextValue}>
      {children}
    </stateContext.Provider>
  );
};
