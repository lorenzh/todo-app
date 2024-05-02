import { Spectator, createComponentFactory } from "@ngneat/spectator";
import { TodoListPageComponent } from "./todo-list-page.component";

describe('TodoListPageComponent', () => { 
    let spectator: Spectator<TodoListPageComponent>;
    const createComponent = createComponentFactory(TodoListPageComponent);

    beforeEach(() => spectator = createComponent());

    it('should create the app', () => {
        expect(spectator.component).toBeTruthy();
    });
})