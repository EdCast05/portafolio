import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'certifications', component: CertificationsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
