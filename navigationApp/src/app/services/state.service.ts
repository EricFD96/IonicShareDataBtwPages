import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private todosSubject = new BehaviorSubject([]);

  constructor() {}

  get todos(): Observable<string[]> {
    return this.todosSubject.asObservable();
  }

  addTodo(newTodo: string) {
    const todos = this.todosSubject.value;
    todos.push(newTodo);
    this.todosSubject.next(todos);
  }

  removeTodo(index: number) {
    const todos = this.todosSubject.value;
    todos.splice(index, 1);
    this.todosSubject.next(todos);
  }
}
