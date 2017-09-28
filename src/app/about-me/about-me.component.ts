import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe = null;

  constructor(private cvDataService: CvDataService) {
  }

  ngOnInit() {
    this.aboutMe = this.cvDataService.getCvData().about;
  }

}
