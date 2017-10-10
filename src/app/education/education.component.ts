import {Component, OnInit} from '@angular/core';
import {CvDataService} from '../shared/services/cv-data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education = null;

  constructor(private cvDataService: CvDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'done',
      sanitizer.bypassSecurityTrustResourceUrl('assets/ic_done_black_24px.svg'));
  }

  ngOnInit() {
    this.cvDataService.getCvData().subscribe(res => this.education = res.education);
  }

}
