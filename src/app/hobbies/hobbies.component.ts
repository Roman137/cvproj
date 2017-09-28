import {Component, OnInit} from '@angular/core';
import {JsonDataService} from '../services/json-data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbies = null;

  constructor(private jsonDataService: JsonDataService) {
  }

  ngOnInit() {
    this.hobbies = this.jsonDataService.hobbies();
  }
}
