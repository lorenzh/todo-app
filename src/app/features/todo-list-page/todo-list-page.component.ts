import { Component, ChangeDetectionStrategy } from '@angular/core';
import { injectAllTodos } from '../../store/todo/todo.selectors';
import { AsyncPipe } from '@angular/common';
import { addTodoWithAutoIdFn } from '../../store/todo/todo.actions';
import { TodoCreateInputComponent } from '../shared/todo-create-input/todo-create-input.component';
import { TodoCardContainerComponent } from '../containers/todo-card-container/todo-card-container.component';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: 'todo-list-page.component.html',
  styleUrls: ['todo-list-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    TodoCardContainerComponent,
    TodoCreateInputComponent,
  ],
})
export class TodoListPageComponent {
  todos$ = injectAllTodos();

  addTodoWithAutoId = addTodoWithAutoIdFn();

  submit(item: { name: string }) {
    this.addTodoWithAutoId(item);
  }
}
