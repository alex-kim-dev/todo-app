import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

import { deleteTodo, toggleTodoCompletion } from '~/actions';
import { useGlobalState } from '~/GlobalState';
import { Filters, type ID } from '~/types';

import { TodoItem } from './TodoItem';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const matchTodo = {
  [Filters.all]: () => true,
  [Filters.active]: (completed: boolean) => !completed,
  [Filters.completed]: (completed: boolean) => completed,
};

export const TodoList: React.FC = () => {
  const {
    state: { todos, todosFilter },
    dispatch,
  } = useGlobalState();

  const filteredTodos = todos.filter(({ completed }) =>
    matchTodo[todosFilter](completed),
  );

  const handleComplete =
    (id: ID): ComponentProps<typeof TodoItem>['onComplete'] =>
    () => {
      dispatch(toggleTodoCompletion(id));
    };

  const handleDelete =
    (id: ID): ComponentProps<typeof TodoItem>['onDelete'] =>
    () => {
      dispatch(deleteTodo(id));
    };

  return (
    <List id='todo-list' aria-label='Todo list'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={handleComplete(todo.id)}
          onDelete={handleDelete(todo.id)}
        />
      ))}
    </List>
  );
};
