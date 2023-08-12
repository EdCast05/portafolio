import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';


//Componentes
import { AboutmeComponent } from './page/aboutme/aboutme.component';
import { EducationComponent } from './page/education/education.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { CertificationsComponent } from './page/certifications/certifications.component';
import { SkillsComponent } from './page/skills/skills.component';
import { ContactComponent } from './page/contact/contact.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EducationComponent,
    ProjectsComponent,
    CertificationsComponent,
    SkillsComponent,
    ContactComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
