import {Routes} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {EducationComponent} from './education/education.component';

export const appRoutes: Routes = [
  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'education', component: EducationComponent}
];
