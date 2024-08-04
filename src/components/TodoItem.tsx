import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

import { hidden } from '~/GlobalCss';
import type { Todo } from '~/types';

import { Checkmark } from './Checkmark';

const ListItem = styled.li(({ theme: { palette, mq } }) => ({
  marginBlockStart: '-0.1rem',
  borderBottom: `0.1rem solid ${palette.muted}`,
  backgroundColor: palette.bgSecondary,

  display: 'flex',
  alignItems: 'center',
  paddingInline: '2rem',
  paddingBlock: '1.6rem',
  boxSizing: 'content-box',

  '&:not(:first-of-type)': {
    borderBlockStart: `0.1rem solid ${palette.muted}`,
  },

  '& > :not(:last-child)': {
    marginInlineEnd: '1.2rem',
  },

  [mq.smUp]: {
    paddingInline: '2.2rem',
    paddingBlock: '1.8rem',

    '& > :not(:last-child)': {
      marginInlineEnd: '1.8rem',
    },

    '&:hover > button': {
      backgroundImage: "url('./icon-cross.svg')",
    },
  },

  [mq.mdUp]: {
    paddingInline: '2.4rem',
    paddingBlock: '2rem',

    '& > :not(:last-child)': {
      marginInlineEnd: '2.4rem',
    },
  },
}));

const Task = styled.p<{ completed?: boolean }>(
  ({ theme: { mq, palette }, completed }) => ({
    flex: 1,
    fontSize: '1.2rem',
    textDecoration: completed ? 'line-through' : 'initial',
    color: completed ? palette.textSecondary : undefined,

    [mq.smUp]: {
      fontSize: '1.5rem',
    },

    [mq.mdUp]: {
      fontSize: '1.8rem',
    },
  }),
);

const DeleteBtn = styled.button(({ theme: { mq, palette } }) => ({
  '--size': '1.2rem',
  inlineSize: '3.4rem',
  blockSize: '3.4rem',
  border: 0,
  borderRadius: '0.4rem',
  padding: 0,
  margin: 'calc((3.4rem - var(--size)) / -2)',
  background: "center / var(--size) no-repeat url('./icon-cross.svg')",
  cursor: 'pointer',
  transition: 'background-color 0.15s',

  '&:hover, &:active': {
    backgroundColor: palette.bgHover,
  },

  '&:focus': {
    backgroundImage: "url('./icon-cross.svg')",
  },

  [mq.smUp]: {
    '--size': '1.5rem',
    backgroundImage: 'none',
  },

  [mq.mdUp]: {
    '--size': '1.8rem',
  },
}));

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
        <span css={hidden}>Delete task</span>
      </DeleteBtn>
    </ListItem>
  );
};
