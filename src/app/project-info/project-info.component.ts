import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project, projects } from "../projects";

@Component({
  selector: "app-project-info",
  templateUrl: "./project-info.component.html",
  styleUrls: ["./project-info.component.css"],
})
export class ProjectInfoComponent implements OnInit {

  project: Project | undefined;
  projects = projects;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the project id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const projectLabelFromRoute = String(routeParams.get("label"));

    // Find the project that correspond with the id provided in route.
    this.project = projects.find(
      (project) => project.label === projectLabelFromRoute
    );

    if ("loading" in HTMLImageElement.prototype) {
      console.log("El navegador soporta `lazy-loading`...");
    } else {
      console.log("`lazy-loading` no soportado...");
    }

  }
}
