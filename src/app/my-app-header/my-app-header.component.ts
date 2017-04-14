import { GenderList } from './../gender-list';
import { MyApp } from './../my-app';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-my-app-header',
  templateUrl: './my-app-header.component.html'

})
export class MyAppHeaderComponent{
  newMyApp: MyApp = new MyApp();

  @Output()
   add: EventEmitter<MyApp> = new EventEmitter();
  constructor() {
  }

  addMember() {
    this.add.emit(this.newMyApp);
    this.newMyApp = new MyApp();
  }
}
