import styled from '@emotion/styled';

import { srOnly } from '../GlobalCss';
import { useGlobalState } from '../GlobalState';
import Checkmark from './Checkmark';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li(
  ({ theme: { mq, palette } }) => `
    display: flex;
    align-items: center;
    padding: 1.4rem 2rem;
    box-sizing: content-box;

    &:not(:first-of-type) {
      border-top: 0.1rem solid ${palette.muted};
    }

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }

    ${mq.smUp} {
      padding: 1.6rem 2.2rem;

      & > :not(:last-child) {
        margin-right: 1.8rem;
      }

      &:hover > button {
        opacity: 1;
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
      completed &&
      `
        text-decoration: line-through;
        color: ${palette.muted};
      `
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

    ${mq.smUp} {
      --size: 1.5rem;
      opacity: 0;
    }

    ${mq.mdUp} {
      --size: 1.8rem;
    }
  `,
);

const TodoList: React.FC = () => {
  const [{ todos }] = useGlobalState();

  return (
    <List id='todo-list'>
      {todos.map(({ id, task, completed }) => (
        <Item key={id}>
          <Checkmark checked={completed} onChange={() => {}} />
          <Task completed={completed}>{task}</Task>
          <DeleteBtn type='button'>
            <span css={srOnly}>Delete task</span>
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default TodoList;
