import { MyAppListItemComponent } from './my-app-list-item/my-app-list-item.component';
import { MyAppService } from './my-app-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyAppHeaderComponent } from './my-app-header/my-app-header.component';
import { MyAppListComponent } from './my-app-list/my-app-list.component';
import { GenderComponent } from './gender/gender.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyAppHeaderComponent,
    MyAppListComponent,
    MyAppListItemComponent,
    GenderComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyAppService],
  bootstrap: [AppComponent],

})
export class AppModule { }
