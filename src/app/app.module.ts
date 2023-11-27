import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { FormationComponent } from './formation/formation.component';
import { ExpProComponent } from './exp-pro/exp-pro.component';
import { CompetencesComponent } from './competences/competences.component';
import { SoftsSkillsComponent } from './softs-skills/softs-skills.component';
import { LoisirsComponent } from './loisirs/loisirs.component';
import { ContactComponent } from './contact/contact.component';
import { MatSelectModule } from '@angular/material/select';
import { RealisationsComponent } from './realisations/realisations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { VoirPlusComponent } from './Outils/voir-plus/voir-plus.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePresentationComponent,
    FormationComponent,
    ExpProComponent,
    CompetencesComponent,
    SoftsSkillsComponent,
    LoisirsComponent,
    ContactComponent,
    RealisationsComponent,
    VoirPlusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
