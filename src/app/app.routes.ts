import { Routes } from '@angular/router';
import { TodoListPageComponent } from './features/todo-list-page/todo-list-page.component';

export const routes: Routes = [
    { path: 'list', component: TodoListPageComponent  },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];
