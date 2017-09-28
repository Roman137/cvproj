import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = null;

  constructor(private cvDataService: CvDataService) {
  }

  ngOnInit() {
    this.education = this.cvDataService.getCvData().education;
  }

}
