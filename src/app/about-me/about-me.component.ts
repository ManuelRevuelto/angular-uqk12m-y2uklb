import { Component } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
})
export class AboutMeComponent {
  patri!: string;
  constructor() {
    this.patri =
      "https://www.esda.es/resize/245x245_crop/files/images/u709/yop66546.jpg";
      console.log()
  }
}
