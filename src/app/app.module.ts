import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProyectListComponent } from './proyect-list/proyect-list.component';
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProyectListComponent },
    ]),
    NgFallimgModule.forRoot({
      default: '/assets/PJ.png',
      post: '/assets/PJ.png'
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProyectListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/