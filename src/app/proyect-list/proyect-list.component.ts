import { Component } from '@angular/core';

import { proyects } from '../proyects';

@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.css']
})
export class ProyectListComponent {
  proyects = proyects;

  share() {
    window.alert('It do not worked');
  }
}
