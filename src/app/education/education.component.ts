import {Component, OnInit} from '@angular/core';
import {JsonDataService} from '../services/json-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = null;

  constructor(private jsonDataService: JsonDataService) {
  }

  ngOnInit() {
    this.education = this.jsonDataService.education();
  }

}
