import Surface from './Surface';
import TodoList from './TodoList';

const Content: React.FC = () => {
  return (
    <Surface as='main' css={{ marginTop: '1.6rem' }}>
      <TodoList />
    </Surface>
  );
};

export default Content;
