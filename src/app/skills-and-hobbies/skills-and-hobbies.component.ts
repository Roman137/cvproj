import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';

@Component({
  selector: 'app-skills-and-hobbies',
  templateUrl: './skills-and-hobbies.component.html',
  styleUrls: ['./skills-and-hobbies.component.scss']
})
export class SkillsAndHobbiesComponent implements OnInit {

  skills = null;

  constructor(private cvDataService: CvDataService) {
  }

  ngOnInit() {
    this.skills = this.cvDataService.getCvData().skillsAndHobbies;
  }

}
