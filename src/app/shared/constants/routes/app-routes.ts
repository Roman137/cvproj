import {Routes} from '@angular/router';
import {AboutMeComponent} from '../../../about-me/about-me.component';
import {EducationComponent} from '../../../education/education.component';
import {SkillsAndHobbiesComponent} from '../../../skills-and-hobbies/skills-and-hobbies.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills-and-hobbies', component: SkillsAndHobbiesComponent},
  {path: 'education', component: EducationComponent}
];
