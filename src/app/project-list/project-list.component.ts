import { Component } from '@angular/core';

import { projects } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = projects;
  router: any;

  share() {
    window.alert('It do not worked');
    
  }

}
