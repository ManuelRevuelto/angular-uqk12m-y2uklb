import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { NgFallimgModule } from 'ng-fallimg';
import { ProjectInfoComponent } from './project-info/project-info.component';


const appRoutes: Routes = [
  { path: 'projects', component: ProyectListComponent },
  { path: 'hola', component: ProjectInfoComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' }
];
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NgFallimgModule.forRoot({
      default: '/assets/PJ.png',
      post: '/assets/PJ.png'
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProyectListComponent,
    ProjectInfoComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

