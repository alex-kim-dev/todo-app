import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import TodoItem, { TodoItemProps } from './TodoItem';

const SortableTodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  return (
    <TodoItem
      ref={setNodeRef}
      css={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      {...listeners}
      {...attributes}
      {...props}
    />
  );
};

export default SortableTodoItem;
