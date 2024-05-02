import { inject } from "@angular/core";
import { RootState } from "../root.state";
import { todoAdapter } from "./todo.state";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import { TodoEntity } from "./todo.entity";

const selectTodoState = (state: RootState) => state.todo;

export const  { selectAll } = todoAdapter.getSelectors(selectTodoState);

export function injectAllTodos() {
    const store = inject(Store);
    return store.select(selectAll);
}
