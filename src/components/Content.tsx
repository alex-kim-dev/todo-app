import styled from '@emotion/styled';

import { clearCompleted } from '../actions';
import { useGlobalState } from '../GlobalState';
import Surface from './Surface';
import TodoList from './TodoList';

const Container = styled(Surface)(
  ({ theme: { mq } }) => `
    margin-top: 1.6rem;

    ${mq.mdUp} {
      margin-top: 2.4rem;
    }
  `,
);

const Status = styled.div(
  ({ theme: { palette, mq } }) => `
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem 2rem;
    color: ${palette.textSecondary};
    font-size: 1.2rem;

    ${mq.smUp} {
      padding: 1.9rem 2.4rem 1.7rem;
      font-size: 1.4rem;
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
  const [{ todos }, dispatch] = useGlobalState();
  const countText = `${todos.length} item${todos.length === 1 ? '' : 's'} left`;

  const handleClearBtnClick = (): void => {
    dispatch(clearCompleted());
  };

  return (
    <Container as='main'>
      <TodoList />
      <Status>
        <span>{countText}</span>
        <ClearBtn type='button' onClick={handleClearBtnClick}>
          Clear Completed
        </ClearBtn>
      </Status>
    </Container>
  );
};

export default Content;
