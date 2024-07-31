import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  type ContextType,
  type ReactElement,
  type ReactNode,
  useMemo,
  useReducer,
} from 'react';

import { initialState, reducer, stateContext } from '~/GlobalState';

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo<ContextType<typeof stateContext>>(
    () => ({ state, dispatch }),
    [state],
  );

  return (
    <stateContext.Provider value={contextValue}>
      <div>{children}</div>;
    </stateContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> => render(ui, { wrapper: Wrapper, ...options });

const user = userEvent.setup();

export * from '@testing-library/react';
export { customRender as render, user };
