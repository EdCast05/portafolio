import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './page/projects/projects.component';
import { AboutmeComponent } from './page/aboutme/aboutme.component';
import { ContactComponent } from './page/contact/contact.component';
import { CertificationsComponent } from './page/certifications/certifications.component';
import { EducationComponent } from './page/education/education.component';
import { SkillsComponent } from './page/skills/skills.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
