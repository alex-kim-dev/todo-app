import styled from '@emotion/styled';
import type { ChangeEventHandler } from 'react';

import { clearCompleted, setFilter } from '~/actions';
import { useGlobalState } from '~/GlobalState';
import { Filters } from '~/types';

import { Filter } from './Filter';
import { Surface } from './Surface';
import { TodoList } from './TodoList';

const Container = styled.main(({ theme: { mq } }) => ({
  position: 'relative',
  marginBlockStart: '1.6rem',

  [mq.mdUp]: {
    marginBlockStart: '2.4rem',
  },
}));

const Status = styled.div(({ theme: { palette, mq } }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingInline: '2rem',
  paddingBlock: '1.8rem 2rem',
  color: palette.textSecondary,
  fontSize: '1.2rem',

  '& > span': {
    gridArea: '1 / 1 / -1 / 2',
  },

  '& > button': {
    justifySelf: 'end',
    gridArea: '1 / -2 / -1 / -1',
  },

  [mq.smUp]: {
    paddingInline: '2.4rem',
    paddingBlock: '1.9rem 1.7rem',
    fontSize: '1.4rem',
  },

  [mq.mdUp]: {
    gridTemplateColumns: '1fr 22rem 1fr',
    minBlockSize: '5rem',
  },
}));

const ClearBtn = styled.button(({ theme: { palette } }) => ({
  marginInline: '-0.4rem',
  marginBlock: '-1rem',
  paddingInline: '0.4rem',
  paddingBlock: '1rem',
  border: 0,
  borderRadius: '0.5rem',
  background: 'none',
  color: 'inherit',
  cursor: 'pointer',
  transition: 'background-color 0.2s, color 0.2s',

  '&:hover, &:active': {
    backgroundColor: palette.bgHover,
    color: palette.text,
  },
}));

export const Content: React.FC = () => {
  const {
    state: { todos, todosFilter },
    dispatch,
  } = useGlobalState();
  const countText = `${todos.length} item${todos.length === 1 ? '' : 's'} left`;

  const handleClearBtnClick = (): void => {
    dispatch(clearCompleted());
  };

  const handleFilterChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => {
    dispatch(setFilter(currentTarget.value as Filters));
  };

  return (
    <Container>
      <Surface>
        <TodoList />
        <Status>
          <span role='status' data-testid='todo-counter'>
            {countText}
          </span>
          <ClearBtn type='button' onClick={handleClearBtnClick}>
            Clear Completed
          </ClearBtn>
        </Status>
      </Surface>
      <Filter option={todosFilter} onChange={handleFilterChange} />
    </Container>
  );
};
