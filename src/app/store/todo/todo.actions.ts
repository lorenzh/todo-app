import { Store, createAction, props } from "@ngrx/store";
import { TodoEntity } from "./todo.entity";
import { inject } from "@angular/core";

const prefix = '[Todo]';

export const addTodo = createAction(`${prefix} Add Todo`, props<{ todo: TodoEntity }>());

export function addTodoWithAutoIdFn() {
    const store = inject(Store);

    return (todo: Omit<TodoEntity, 'id'>) => { 
        store.dispatch(addTodo({ todo: { ...todo, id: Date.now() } }));
    }
} 

export const patchTodo = createAction(`${prefix} Patch Todo`, props<{ id: number, changes: Partial<TodoEntity> }>());

export function updateDescriptionFn() { 
    const store = inject(Store);

    return (data: {id: number, description: string }) =>
    store.dispatch(patchTodo({ id: data.id, changes: { description: data.description } }));
}

export const removeTodo = createAction(`${prefix} Remove Todo`, props<{ id: number }>());