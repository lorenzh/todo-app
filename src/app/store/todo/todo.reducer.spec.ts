import { addTodo, patchTodo, removeTodo } from './todo.actions';
import { TodoEntity } from './todo.entity';
import { todoReducer } from './todo.reducer';
import { TodoState, todoAdapter } from './todo.state';

describe('todoReducer', () => {
  describe('addTodo', () => {
    it('should add a todo', () => {
      const state: TodoState = todoAdapter.getInitialState();

      const todoToAdd: TodoEntity = { id: 1, name: 'Test' };

      const nextState = todoReducer(state, addTodo({ todo: todoToAdd }));
      expect(nextState.entities[1]).toEqual(todoToAdd);
    });
  });

  describe('patchTodo', () => {
    it('should patch a todo', () => {
      const state: TodoState = todoAdapter.getInitialState({
        ids: [1],
        entities: {
          1: { id: 1, name: 'Test' },
        },
      });

      const changes: TodoEntity = { id: 1, name: 'Updated', completed: true };

      const nextState = todoReducer(state, patchTodo({ id: 1, changes }));
      expect(nextState.entities[1]).toEqual(changes);
    });
  });

  describe('removeTodo', () => {
    it('should remove a todo', () => {
      const state: TodoState = todoAdapter.getInitialState({
        ids: [1],
        entities: {
          1: { id: 1, name: 'Test' },
        },
      });

      const nextState = todoReducer(state, removeTodo({ id: 1 }));
      expect(nextState.entities[1]).toBeUndefined();
    });
  });
});
