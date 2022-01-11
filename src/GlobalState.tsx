import produce from 'immer';
import { createContext, useContext, useReducer } from 'react';

import { Action, ActionTypes } from './actions';
import { ColorThemes } from './theme';

interface IGlobalState {
  colorTheme: ColorThemes;
}

const initialState: IGlobalState = {
  colorTheme: ColorThemes.dark,
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
