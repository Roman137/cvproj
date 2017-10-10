import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './shared/constants/routes/app-routes';
import {NavComponent} from './nav/nav.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {EducationComponent} from './education/education.component';
import {CustomMaterialModule} from './shared/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CvDataService} from './shared/services/cv-data.service';
import {SkillsAndHobbiesComponent} from './skills-and-hobbies/skills-and-hobbies.component';
import {URI_CONFIG} from './shared/config/di-tokens/uri.config';
import {STANDARD_URI_CONFIG} from './shared/config/standard-uri-config';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CvDataAjaxJs5Service} from './shared/services/cv-data-ajax-js5.service';
import {RELATIVE_URI_CONFIG} from './shared/config/relative-uri-config';
import {environment} from '../environments/environment';
import {MatIconRegistry} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsAndHobbiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    MatIconRegistry,
    {provide: CvDataService, useClass: CvDataAjaxJs5Service},
    {
      provide: URI_CONFIG, useValue: environment.production === true ? RELATIVE_URI_CONFIG : STANDARD_URI_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
