import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies = null;

  constructor(private cvDataService: CvDataService) {
  }

  ngOnInit() {
    this.hobbies = this.cvDataService.getCvData().hobbies;
  }
}
