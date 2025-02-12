import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private idCounter: number = 1;
  private todos: Todo[] = [];

  constructor() {
    this.todos = [
      {
        id: this.generateId(),
        text: 'Clean up',
        completed: false,
      },
      {
        id: this.generateId(),
        text: 'Wash dishes',
        completed: true,
      },
      {
        id: this.generateId(),
        text: 'Cook dinner',
        completed: false,
      },
    ]
  }

  createTodo(text: string): Todo {
    return {
      id: this.generateId(),
      text: text,
      completed: false,
    }
  }

  private generateId(){
    return this.idCounter++;
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}

export interface Todo {
  id: number,
  text: string;
  completed: boolean;
}
