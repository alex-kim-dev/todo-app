import '@testing-library/jest-dom/extend-expect';

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from '../App';
import { initialState, reducer, stateContext } from '../GlobalState';
import getTheme from '../theme';
import { ColorThemes, Filters } from '../types';

const GlobalState: React.FC = ({ children }) => {
  const valueToPass = React.useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={valueToPass}>
      {children}
    </stateContext.Provider>
  );
};

describe('Todo app', () => {
  beforeEach(() =>
    render(
      <React.StrictMode>
        <GlobalState>
          <App />
        </GlobalState>
      </React.StrictMode>,
    ),
  );

  it('renders correctly', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /todo/i,
    );

    expect(
      screen.getByRole('switch', { name: /dark theme/i }),
    ).toBeInTheDocument();

    expect(
      within(screen.getByRole('form', { name: /new todo form/i })).getByRole(
        'textbox',
        { name: /new task/i },
      ),
    ).toHaveTextContent('');

    within(screen.getByRole('list', { name: /todo list/i }))
      .getAllByRole('listitem')
      .forEach((item, i) => {
        const { task, completed } = initialState.todos[i];

        expect(item).toHaveTextContent(task);
        expect(
          within(item).getByRole('checkbox', { checked: completed }),
        ).toBeInTheDocument();
        expect(
          within(item).getByRole('button', { name: /delete task/i }),
        ).toBeInTheDocument();
      });

    expect(screen.getByRole('status')).toHaveTextContent(
      new RegExp(`${initialState.todos.length} items? left`, 'i'),
    );

    const filters = [Filters.all, Filters.active, Filters.completed];
    within(screen.getByRole('group', { name: /filter todos/i }))
      .getAllByRole('radio')
      .forEach((radio, i) => {
        expect(radio).toHaveAccessibleName(String(filters[i]));
        expect((radio as HTMLInputElement).checked).toBe(
          initialState.todosFilter === filters[i],
        );
      });

    expect(
      screen.getByRole('button', { name: /clear completed/i }),
    ).toBeInTheDocument();
  });

  it('switches a color theme', async () => {
    const checked = initialState.colorTheme === ColorThemes.dark;

    expect(
      screen.getByRole('switch', {
        name: /dark theme/i,
        checked,
      }),
    ).toBeInTheDocument();
    expect(document.body).toHaveStyle(
      `background-color: ${
        getTheme(initialState.colorTheme).palette.bgPrimary
      }`,
    );

    await userEvent.click(
      screen.getByRole('switch', {
        name: /dark theme/i,
      }),
    );

    expect(
      screen.getByRole('switch', {
        name: /dark theme/i,
        checked: !checked,
      }),
    ).toBeInTheDocument();
    expect(document.body).toHaveStyle(
      `background-color: ${
        getTheme(checked ? ColorThemes.light : ColorThemes.dark).palette
          .bgPrimary
      }`,
    );
  });

  it('adds a new todo', async () => {
    const todosCount = initialState.todos.length;
    const input = screen.getByRole('textbox', { name: /new task/i });

    await userEvent.type(input, 'test{enter}');
    const items = within(
      screen.getByRole('list', { name: /todo list/i }),
    ).getAllByRole('listitem');
    const lastItem = items[items.length - 1];

    expect(input).toHaveValue('');
    expect(items.length).toBe(todosCount + 1);
    expect(screen.getByRole('status')).toHaveTextContent(
      new RegExp(`^${todosCount + 1}`),
    );
    expect(lastItem).toHaveTextContent('test');
    expect(
      within(lastItem).getByRole('checkbox', { checked: false }),
    ).toBeInTheDocument();

    await userEvent.type(input, '{enter}');

    expect(
      within(screen.getByRole('list', { name: /todo list/i })).getAllByRole(
        'listitem',
      ).length,
    ).toBe(todosCount + 1);
    expect(screen.getByRole('status')).toHaveTextContent(
      new RegExp(`^${todosCount + 1}`),
    );
  });

  it('deletes todos', async () => {
    await userEvent.click(
      screen.getAllByRole('button', { name: /delete task/i })[1],
    );

    const todosCount = initialState.todos.length;
    const list = screen.getByRole('list', { name: /todo list/i });
    const items = within(list).getAllByRole('listitem');

    expect(
      within(list).queryByText(initialState.todos[1].task),
    ).not.toBeInTheDocument();
    expect(items.length).toBe(todosCount - 1);
    expect(screen.getByRole('status')).toHaveTextContent(
      new RegExp(`^${todosCount - 1}`),
    );
  });

  it('changes the completion state', async () => {
    const checkmark = within(
      screen.getByRole('list', { name: /todo list/i }),
    ).getAllByRole('checkbox')[0];
    const checked = initialState.todos[0].completed;

    await userEvent.click(checkmark);

    expect((checkmark as HTMLInputElement).checked).toBe(!checked);

    await userEvent.click(checkmark);

    expect((checkmark as HTMLInputElement).checked).toBe(checked);
  });

  it('filters the todo list', async () => {
    const { todos } = initialState;
    const completedCount = todos.filter(({ completed }) => completed).length;
    const activeCount = todos.length - completedCount;
    const list = screen.getByRole('list', { name: /todo list/i });

    await userEvent.click(screen.getByRole('radio', { name: 'active' }));

    expect(within(list).getAllByRole('listitem').length).toBe(activeCount);
    within(list)
      .getAllByRole('checkbox')
      .forEach((checkmark) => {
        expect(checkmark).not.toBeChecked();
      });

    await userEvent.click(screen.getByRole('radio', { name: 'completed' }));

    expect(within(list).getAllByRole('listitem').length).toBe(completedCount);
    within(list)
      .getAllByRole('checkbox')
      .forEach((checkmark) => {
        expect(checkmark).toBeChecked();
      });
  });

  it('deletes all completed todos', async () => {
    const list = screen.getByRole('list', { name: /todo list/i });
    const activeCount = initialState.todos.filter(
      ({ completed }) => !completed,
    ).length;

    await userEvent.click(
      screen.getByRole('button', { name: /clear completed/i }),
    );

    expect(within(list).getAllByRole('listitem').length).toBe(activeCount);
    within(list)
      .getAllByRole('checkbox')
      .forEach((checkmark) => {
        expect(checkmark).not.toBeChecked();
      });
  });
});
