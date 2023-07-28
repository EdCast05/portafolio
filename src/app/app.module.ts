import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [		
    AppComponent,
    ProjectsComponent,
    NavBarComponent,
    AboutmeComponent,
    ContactComponent,
    FooterComponent,
    CertificationsComponent,
    EducationComponent,
    SkillsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
