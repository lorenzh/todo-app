import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-create-input',
  templateUrl: './todo-create-input.component.html',
  styleUrls: ['./todo-create-input.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class TodoCreateInputComponent {
  @Output() save = new EventEmitter<{ name: string }>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.save.emit({ name: this.form.value.name! });
    this.form.reset();
  }
}
