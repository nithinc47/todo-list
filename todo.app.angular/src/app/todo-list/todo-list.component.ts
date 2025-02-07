import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroup } from 'primeng/inputgroup';
import { InputText } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: 'todo-list',
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    InputGroup,
    InputText,
    Button,
    TableModule
  ],
  template: `
<div class="my-block">
  <p-input-group>
    <input pInputText placeholder="New item" />
    <p-button label="Add"/>
  </p-input-group>
  <div class="mt-4">
    <p-table [value]="todos">
      <ng-template #header>
        <tr>
          <th>To Do</th>
          <th class="table-text-center">Completed</th>
          <th></th>
        </tr>
      </ng-template>
      <ng-template #body let-item>
        <tr>
          <td [class.text-completed]="item.completed">{{ item.text }}</td>
          <td class="table-text-center"><p-checkbox [(ngModel)]="item.completed" [binary]="true" /></td>
          <td><p-button icon="pi pi-trash" severity="danger" /></td>
        </tr>
      </ng-template>
    </p-table>
  </div>
</div>
`,
  encapsulation: ViewEncapsulation.Emulated,
  styles: `
.table-text-center {
  text-align: center;
}
.text-completed {
  color: var(--p-text-muted-color);
  text-decoration: line-through;
}
`
})
export class TodoListComponent {
  private todoService = inject(TodoService);
  todos: Todo[];

  constructor(){
    this.todos = this.todoService.getTodos();
  }
}
