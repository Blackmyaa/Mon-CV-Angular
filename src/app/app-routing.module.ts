import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { FormationComponent } from './formation/formation.component';
import { ExpProComponent } from './exp-pro/exp-pro.component';
import { CompetencesComponent } from './competences/competences.component';
import { SoftsSkillsComponent } from './softs-skills/softs-skills.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { ContactComponent } from './contact/contact.component';
import { RealisationsComponent } from './realisations/realisations.component';

const routes: Routes = [ 
  {path: '', component: HomePresentationComponent },
  {path: 'Formation', component: FormationComponent  },
  {path: 'ExpPro', component: ExpProComponent },
  {path: 'Competences', component: CompetencesComponent },
  {path: 'Realisations', component: RealisationsComponent },
  {path: 'Softs-skills', component: SoftsSkillsComponent },
  {path: 'Loisirs', component: LoisirsComponent },
  {path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }