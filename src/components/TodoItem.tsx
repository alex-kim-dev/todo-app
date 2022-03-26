import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

import { srOnly } from '../GlobalCss';
import type { ITodo } from '../types';
import Checkmark from './Checkmark';

const DragWrapper = styled.div(
  ({ theme: { mq, palette } }) => `
    display: flex;
    align-items: center;
    padding: 1.6rem 2rem;
    box-sizing: content-box;
    border-bottom: 0.1rem solid ${palette.muted};

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }

    ${mq.smUp} {
      padding: 1.8rem 2.2rem;

      & > :not(:last-child) {
        margin-right: 1.8rem;
      }

      &:hover > button {
        background-image: url('./icon-cross.svg');
      }
    }

    ${mq.mdUp} {
      padding: 2rem 2.4rem;

      & > :not(:last-child) {
        margin-right: 2.4rem;
      }
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
  todo: ITodo;
  onComplete?: () => void;
  onDelete?: () => void;
  className?: string;
}

const TodoItem = forwardRef<HTMLDivElement, TodoItemProps>(
  ({ todo, onComplete = () => {}, onDelete, className, ...props }, ref) => {
    const { task, completed } = todo;

    return (
      <li>
        <DragWrapper ref={ref} className={className} {...props}>
          <Checkmark checked={completed} onChange={onComplete} />
          <Task completed={completed}>{task}</Task>
          <DeleteBtn type='button' onClick={onDelete} aria-controls='todo-list'>
            <span css={srOnly}>Delete task</span>
          </DeleteBtn>
        </DragWrapper>
      </li>
    );
  },
);

export default TodoItem;
