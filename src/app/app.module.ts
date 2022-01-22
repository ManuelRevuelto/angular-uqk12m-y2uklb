import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NgFallimgModule } from 'ng-fallimg';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';


const appRoutes: Routes = [

];
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgFallimgModule.forRoot({
      default: '/assets/PJ.png',
      post: '/assets/PJ.png'
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProjectListComponent,
    ProjectInfoComponent,
    AboutMeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

