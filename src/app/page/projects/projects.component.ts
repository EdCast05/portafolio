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
    // Simula un retraso para mostrar el spinner de carga
    setTimeout(() => {
      this.isLoading = false; // Indica que el contenido ha terminado de cargar
    }, 3500); // Cambia esto al tiempo que consideres adecuado
  }

  setSandboxAttribute() {
    this.urlDelSitioExternoSegura1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDelSitioExterno1);
    this.urlDelSitioExternoSegura2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDelSitioExterno2);

  }
}
