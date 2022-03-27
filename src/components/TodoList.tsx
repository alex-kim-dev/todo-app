import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import styled from '@emotion/styled';
import { useState } from 'react';

import { deleteTodo, reorderTodos, toggleTodoCompletion } from '../actions';
import { useGlobalState } from '../GlobalState';
import { Filters, Id, ITodo } from '../types';
import SortableTodoItem from './SortableTodoItem';
import TodoItem from './TodoItem';

const activationConstraint = { delay: 400, tolerance: 5 };

const emptyTodo: ITodo = {
  id: '0',
  task: '',
  completed: false,
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const matchTodo = {
  [Filters.all]: () => true,
  [Filters.active]: (completed: boolean) => !completed,
  [Filters.completed]: (completed: boolean) => completed,
};

const TodoList: React.FC = () => {
  const [{ todos, todosFilter }, dispatch] = useGlobalState();
  const [draggedTodoId, setDraggedTodoId] = useState<Id | null>(null);

  const draggedTodo = todos.find(({ id }) => id === draggedTodoId) ?? emptyTodo;
  const todosOrder = todos.map(({ id }) => id);
  const filteredTodos = todos.filter(({ completed }) =>
    matchTodo[todosFilter](completed),
  );

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint }),
    useSensor(TouchSensor, { activationConstraint }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleComplete = (id: Id) => (): void => {
    dispatch(toggleTodoCompletion(id));
  };

  const handleDelete = (id: Id) => (): void => {
    dispatch(deleteTodo(id));
  };

  const handleDragStart = (event: DragStartEvent): void => {
    const { active } = event;
    setDraggedTodoId(active.id);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent): void => {
    if (over?.id) dispatch(reorderTodos({ move: active.id, after: over.id }));
    setDraggedTodoId(null);
  };

  return (
    <List id='todo-list' aria-label='Todo list'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={todosOrder}
          strategy={verticalListSortingStrategy}
        >
          {filteredTodos.map((todo) => (
            <SortableTodoItem
              key={todo.id}
              todo={todo}
              onComplete={handleComplete(todo.id)}
              onDelete={handleDelete(todo.id)}
            />
          ))}
        </SortableContext>
        <DragOverlay>
          {draggedTodoId && <TodoItem todo={draggedTodo} isOverlay />}
        </DragOverlay>
      </DndContext>
    </List>
  );
};

export default TodoList;
