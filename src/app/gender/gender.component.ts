import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GenderList } from './../gender-list';
import { MyApp } from '../my-app';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html'
})

export class GenderComponent {

@Input() myApp : MyApp;


  genders = [
     new GenderList(0, 'Select' ),
     new GenderList(1, 'Male' ),
     new GenderList(2, 'Female' ),
  ];

}
