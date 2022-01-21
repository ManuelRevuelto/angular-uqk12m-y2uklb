import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyect, proyects } from '../proyects';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  proyect: Proyect | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the proyect id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const proyectIdFromRoute = String(routeParams.get('label'));
  
    // Find the proyect that correspond with the id provided in route.
    this.proyect = proyects.find(proyect => proyect.label === proyectIdFromRoute);
  }

}
