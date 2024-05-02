import { Component, ChangeDetectionStrategy } from '@angular/core';
import { injectAllTodos } from '../../store/todo/todo.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { addTodoWithAutoIdFn } from '../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: 'todo-list-page.component.html',
  styleUrls: ['todo-list-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ReactiveFormsModule],
})
export class TodoListPageComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  todos$ = injectAllTodos();

  addTodoWithAutoId = addTodoWithAutoIdFn();

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.addTodoWithAutoId({ name: this.form.value.name! });
  }
}
