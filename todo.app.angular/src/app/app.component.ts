import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [TodoListComponent],
  template: `
<main class="main">
  <todo-list class="todo-list" />
</main>

`,
  styles: `
.main {
  display: block;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 2rem 0 2rem;
}

.todo-list {
  display: block;
  margin: 0 auto;
  max-width: 600px;
  padding: 16px;
  border: 1px solid var(--p-card-color);
  border-radius: var(--p-card-border-radius);
}
`
})
export class AppComponent {
  title = 'todo.app.angular';
}
