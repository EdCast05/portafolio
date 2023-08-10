import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../env/enviroment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  urlDelSitioExterno: string = environment.powerBiUrl;

  urlDelSitioExternoSegura!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setSandboxAttribute();
  }

  setSandboxAttribute() {
    this.urlDelSitioExternoSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDelSitioExterno);
  }
}
