import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../env/enviroment';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isLoading: boolean = true;
  urlDelSitioExterno1: string = environment.powerBiUrl1;
  urlDelSitioExterno2: string = environment.powerBiUrl2;

  urlDelSitioExternoSegura1!: SafeResourceUrl;
  urlDelSitioExternoSegura2!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setSandboxAttribute();
    setTimeout(() => {
      this.isLoading = false; 
    }, 3500); 
  }

  setSandboxAttribute() {
    this.urlDelSitioExternoSegura1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDelSitioExterno1);
    this.urlDelSitioExternoSegura2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDelSitioExterno2);

  }
}
