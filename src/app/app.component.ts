import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyAppListItemComponent } from './my-app-list-item/my-app-list-item.component';
import { MyApp } from './my-app';
import { extraEntryParser } from 'angular-cli/models/webpack-configs';
import { Component } from '@angular/core';
import { MyAppService } from './my-app-service.service';
import { MyAppHeaderComponent } from './my-app-header/my-app-header.component';
import { GenderComponent } from './gender/gender.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyAppService],
  entryComponents: [MyAppHeaderComponent, MyAppListItemComponent, GenderComponent, HomeComponent, AboutUsComponent, PageNotFoundComponent]

})
export class AppComponent {
 newMyApp: MyApp = new MyApp();

 constructor(private myAppService: MyAppService) {
  }

  onAddMember(myApp: MyApp) {
       this.myAppService.addFamilyMember(myApp);
  }

   get myApps() {
      return this.myAppService.getAllMembers();
   }

}

