import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = null;

  constructor(private cvDataService: CvDataService) {
  }

  ngOnInit() {
    this.skills = this.cvDataService.getCvData().skills;
  }

}
