import { createReducer, on } from "@ngrx/store";
import { INITIAL_TODO_STATE, todoAdapter } from "./todo.state";
import { addTodo, patchTodo, removeTodo } from "./todo.actions";

export const todoReducer = createReducer(INITIAL_TODO_STATE, 
    on(addTodo, (state, { todo }) => todoAdapter.addOne(todo, state)),
    on(patchTodo, (state, { id, changes }) => todoAdapter.updateOne({ id, changes }, state)),
    on(removeTodo, (state, { id }) => todoAdapter.removeOne(id, state))
);

