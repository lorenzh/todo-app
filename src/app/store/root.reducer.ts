import { ActionReducerMap } from "@ngrx/store";
import { RootState } from "./root.state";
import { todoReducer } from "./todo/todo.reducer";


export const rootReducer : ActionReducerMap<RootState> = {
        todo: todoReducer
    };