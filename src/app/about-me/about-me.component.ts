import {Component, OnInit} from '@angular/core';
import {JsonDataService} from '../services/json-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe = null;

  constructor(private jsonDataService: JsonDataService) {
  }

  ngOnInit() {
    this.aboutMe = this.jsonDataService.aboutMe();
  }

}
