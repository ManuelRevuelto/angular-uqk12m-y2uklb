import { Component } from '@angular/core';

import { projects } from '../models/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects = projects;
}
