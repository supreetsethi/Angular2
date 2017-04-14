import { GenderList } from './gender-list';
import { MyApp } from './my-app';
import { Injectable } from '@angular/core';

@Injectable()
export class MyAppService {
  // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;

    // Placeholder for todo's
    myApps: MyApp[] = [];

    constructor() {
    }

    // Simulate POST /todos
    addFamilyMember(myApp: MyApp): MyAppService {
        if (!myApp.id) {
            myApp.id = ++this.lastId;
        }
        this.myApps.push(myApp);
        return this;
    }

   // Simulate GET /todos
  getAllMembers(): MyApp[] {
    return this.myApps;
  }


}
