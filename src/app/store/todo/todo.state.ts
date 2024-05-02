import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { TodoEntity } from './todo.entity';

export interface TodoState extends EntityState<TodoEntity> {}

export const todoAdapter = createEntityAdapter<TodoEntity>();

export const INITIAL_TODO_STATE: TodoState = todoAdapter.getInitialState({});
