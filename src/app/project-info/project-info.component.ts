import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project, projects } from "../models/projects";

@Component({
  selector: "app-project-info",
  templateUrl: "./project-info.component.html",
})
export class ProjectInfoComponent implements OnInit {
  project: Project | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap.get("label");
    this.project = projects.find((project) => project.label === routeParams);
    console.log(this.project);
  }
}
