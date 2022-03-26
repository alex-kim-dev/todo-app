import styled from '@emotion/styled';

import { clearCompleted, setFilter } from '../actions';
import { useGlobalState } from '../GlobalState';
import { Filters } from '../types';
import Filter from './Filter';
import Surface from './Surface';
import TodoList from './TodoList';

const Container = styled.main(
  ({ theme: { mq } }) => `
    position: relative;
    margin-top: 1.6rem;

    ${mq.mdUp} {
      margin-top: 2.4rem;
    }
  `,
);

const Status = styled.div(
  ({ theme: { palette, mq } }) => `
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem 2rem 2rem;
    color: ${palette.textSecondary};
    font-size: 1.2rem;

    & > span {
      grid-area: 1 / 1 / -1 / 2;
    }

    & > button {
      justify-self: end;
      grid-area: 1 / -2 / -1 / -1;
    }

    ${mq.smUp} {
      padding: 1.9rem 2.4rem 1.7rem;
      font-size: 1.4rem;
    }

    ${mq.mdUp} {
      grid-template-columns: 1fr 22rem 1fr;
      min-height: 5rem;
    }
  `,
);

const ClearBtn = styled.button(
  ({ theme: { palette } }) => `
    margin: -1rem -0.4rem;
    padding: 1rem 0.4rem;
    border: 0;
    border-radius: 0.5rem;
    background: none;
    color: inherit;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover, &:active {
      background-color: ${palette.bgHover};
      color: ${palette.text};
    }
  `,
);

const Content: React.FC = () => {
  const [{ todos, todosFilter }, dispatch] = useGlobalState();
  const countText = `${todos.length} item${todos.length === 1 ? '' : 's'} left`;

  const handleClearBtnClick = (): void => {
    dispatch(clearCompleted());
  };

  const handleFilterChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>): void => {
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

export default Content;
