import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      {
        text: 'Clean up',
        completed: false,
      },
      {
        text: 'Wash dishes',
        completed: true,
      },
      {
        text: 'Cook dinner',
        completed: false,
      },
    ]
  }
}

export interface Todo {
  text: string;
  completed: boolean;
}
