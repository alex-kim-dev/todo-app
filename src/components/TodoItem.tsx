import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

import { srOnly } from '~/GlobalCss';
import type { Todo } from '~/types';

import { Checkmark } from './Checkmark';

const ListItem = styled.li(
  ({ theme: { palette } }) => `
    margin-top: -0.1rem;
    border-bottom: 0.1rem solid ${palette.muted};
    background-color: ${palette.bgSecondary};
I
    &:not(:first-of-type) {
      border-top: 0.1rem solid ${palette.muted};
    }
  `,
);

const Task = styled.p<{ completed?: boolean }>(
  ({ theme: { mq, palette }, completed }) => `
    flex: 1;
    font-size: 1.2rem;

    ${
      completed
        ? `
          text-decoration: line-through;
          color: ${palette.textSecondary};
        `
        : ''
    }

    ${mq.smUp} {
      font-size: 1.5rem;
    }

    ${mq.mdUp} {
      font-size: 1.8rem;
    }
  `,
);

const DeleteBtn = styled.button(
  ({ theme: { mq, palette } }) => `
    --size: 1.2rem;
    width: 3.4rem;
    height: 3.4rem;
    border: 0;
    border-radius: 0.4rem;
    padding: 0;
    margin: calc((3.4rem - var(--size)) / -2);
    background: center / var(--size) no-repeat url('./icon-cross.svg');
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover,
    &:active {
      background-color: ${palette.bgHover};
    }

    &:focus {
      background-image: url('./icon-cross.svg');
    }

    ${mq.smUp} {
      --size: 1.5rem;
      background-image: none;
    }

    ${mq.mdUp} {
      --size: 1.8rem;
    }
  `,
);

export interface TodoItemProps {
  todo: Todo;
  onComplete?: ComponentProps<typeof Checkmark>['onChange'];
  onDelete?: ComponentProps<typeof DeleteBtn>['onClick'];
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onComplete = () => {},
  onDelete = () => {},
}) => {
  const { task, completed } = todo;

  return (
    <ListItem>
      <Checkmark checked={completed} onChange={onComplete} />
      <Task completed={completed}>{task}</Task>
      <DeleteBtn type='button' onClick={onDelete} aria-controls='todo-list'>
        <span css={srOnly}>Delete task</span>
      </DeleteBtn>
    </ListItem>
  );
};
