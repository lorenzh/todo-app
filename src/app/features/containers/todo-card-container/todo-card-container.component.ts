import { Component, Input } from "@angular/core";
import { TodoCardComponent } from "../../shared/todo-card/todo-card.component";
import { TodoEntity } from "../../../store/todo/todo.entity";
import { updateDescriptionFn } from "../../../store/todo/todo.actions";

@Component({
    selector: "app-todo-card-container",
    templateUrl: "./todo-card-container.component.html",
    styleUrls: ["./todo-card-container.component.scss"],
    standalone: true,
    imports: [TodoCardComponent]
})
export class TodoCardContainerComponent {

    @Input({ required: true }) todo!: TodoEntity;

    updateDescription = updateDescriptionFn();

}