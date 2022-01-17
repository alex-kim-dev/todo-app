import styled from '@emotion/styled';

import { addTodo } from '../actions';
import { srOnly } from '../GlobalCss';
import { useGlobalState } from '../GlobalState';
import Surface from './Surface';

const Form = styled(Surface.withComponent('form'))(
  ({ theme: { mq } }) => `
    margin-top: 3.3rem;

    ${mq.mdUp} {
      margin-top: 4rem;
    }
  `,
);

const Label = styled.label`
  display: grid;
  align-items: center;
`;

const Icon = styled.span(
  ({ theme: { palette, mq } }) => `
    --size: 2rem;
    grid-area: 1 / 1 / 2 / -1;
    display: block;
    margin-left: 2rem;
    width: var(--size);
    height: var(--size);
    border: 0.1rem solid ${palette.muted};
    border-radius: 50%;

    ${mq.smUp} {
      --size: 2.4rem;
      margin-left: 2.2rem;
    }

    ${mq.mdUp} {
      margin-left: 2.4rem;
    }
  `,
);

const TextField = styled.input(
  ({ theme: { palette, mq } }) => `
    grid-area: 1 / 1 / -1 / -1;
    padding: 1.9rem 2rem 1.7rem 5.2rem;
    width: 100%;
    border: 0;
    background-color: transparent;
    font-size: 1.2rem;
    color: ${palette.text};

    &::placeholder {
      color: ${palette.textSecondary};
    }

    ${mq.smUp} {
      padding: 2rem 2.2rem 2rem 6.4rem;
      font-size: 1.6rem;
    }

    ${mq.mdUp} {
      padding: 2.4rem 2.4rem 2.2rem 7.2rem;
      font-size: 1.8rem;
    }
  `,
);

const NewTodoForm: React.FC = () => {
  const [, dispatch] = useGlobalState();

  const handleNewTodoSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    const form = event.currentTarget;
    const task = (new FormData(form).get('new-todo') as string).trim();

    if (!task) return;

    dispatch(addTodo(task));
    form.reset();
  };

  return (
    <Form aria-label='New todo form' onSubmit={handleNewTodoSubmit}>
      <Label>
        <span css={srOnly}>New task</span>
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

export default NewTodoForm;
