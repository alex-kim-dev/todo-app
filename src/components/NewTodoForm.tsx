import styled from '@emotion/styled';
import type { FormEventHandler } from 'react';

import { addTodo } from '~/actions';
import { hidden } from '~/GlobalCss';
import { useGlobalState } from '~/GlobalState';

import { Surface } from './Surface';

const Form = styled(Surface.withComponent('form'))(({ theme: { mq } }) => ({
  marginBlockStart: '3.3rem',

  [mq.mdUp]: {
    marginBlockStart: '4rem',
  },
}));

const Label = styled.label({
  display: 'grid',
  alignItems: 'center',
});

const Icon = styled.span(({ theme: { palette, mq } }) => ({
  '--size': '2rem',
  gridArea: '1 / 1 / 2 / -1',
  display: 'block',
  marginInlineStart: '2rem',
  inlineSize: 'var(--size)',
  blockSize: 'var(--size)',
  border: `0.1rem solid ${palette.muted}`,
  borderRadius: '50%',

  [mq.smUp]: {
    '--size': '2.4rem',
    marginInlineStart: '2.2rem',
  },

  [mq.mdUp]: {
    marginInlineStart: '2.4rem',
  },
}));

const TextField = styled.input(({ theme: { palette, mq } }) => ({
  gridArea: '1 / 1 / -1 / -1',
  paddingInline: '5.2rem 2rem',
  paddingBlock: '1.9rem 1.7rem',
  inlineSize: '100%',
  border: 0,
  backgroundColor: 'transparent',
  fontSize: '1.2rem',
  color: palette.text,

  '&::placeholder': {
    color: palette.textSecondary,
  },

  [mq.smUp]: {
    paddingInline: '6.4rem 2.2rem',
    paddingBlock: '2rem',
    fontSize: '1.6rem',
  },

  [mq.mdUp]: {
    paddingInline: '7.2rem 2.4rem',
    paddingBlock: '2.4rem 2.2rem',
    fontSize: '1.8rem',
  },
}));

export const NewTodoForm: React.FC = () => {
  const { dispatch } = useGlobalState();

  const handleNewTodoSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const task = new FormData(form).get('new-todo');

    if (typeof task !== 'string') return;

    dispatch(addTodo(task.trim()));
    form.reset();
  };

  return (
    <Form aria-label='New todo form' onSubmit={handleNewTodoSubmit}>
      <Label>
        <span css={hidden}>New task</span>
        <Icon />
        <TextField
          type='text'
          name='new-todo'
          placeholder='Create a new todo…'
        />
      </Label>
    </Form>
  );
};
