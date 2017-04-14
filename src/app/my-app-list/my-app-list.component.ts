import { MyApp } from './../my-app';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-app-list',
  templateUrl: './my-app-list.component.html'
})
export class MyAppListComponent  {

@Input()
  myApps: MyApp[];

  @Output()
  remove: EventEmitter<MyApp> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<MyApp> = new EventEmitter();
  constructor() {
  }

  onRemove(myApp: MyApp) {
        this.remove.emit(myApp);
  }

  onToggleComplete(myApp: MyApp) {
    this.toggleComplete.emit(myApp);
  }
}
