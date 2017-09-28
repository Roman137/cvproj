import {Component, OnInit} from '@angular/core';
import {JsonDataService} from '../services/json-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = null;

  constructor(private jsonDataService: JsonDataService) {
  }

  ngOnInit() {
    this.skills = this.jsonDataService.skills();
  }

}
