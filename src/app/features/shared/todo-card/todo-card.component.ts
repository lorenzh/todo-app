import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoEntity } from '../../../store/todo/todo.entity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TodoCardComponent {
  @Input({ required: true }) todo!: TodoEntity;

  @Output() descriptionChange = new EventEmitter<string>();
}
