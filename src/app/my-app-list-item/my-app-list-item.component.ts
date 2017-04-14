import { MyApp } from './../my-app';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-app-list-item',
  templateUrl: './my-app-list-item.component.html'

})
export class MyAppListItemComponent {
  @Input() myApp: MyApp;

  @Output()
  remove: EventEmitter<MyApp> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<MyApp> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(myApp: MyApp) {
    this.toggleComplete.emit(myApp);
  }

  removeTodo(myApp: MyApp) {
    this.remove.emit(myApp);
  }
}
