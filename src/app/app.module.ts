import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {appRoutes} from './shared/constants/routes/app-routes';
import {NavComponent} from './nav/nav.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {EducationComponent} from './education/education.component';
import {CustomMaterialModule} from './custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CvDataService} from './shared/services/cv-data.service';
import {CvDataMockService} from './shared/services/mock/cv-data-mock.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    NavComponent,
    AboutMeComponent,
    HobbiesComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: CvDataService, useClass: CvDataMockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
