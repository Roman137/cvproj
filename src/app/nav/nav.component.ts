import {Component, OnInit} from '@angular/core';
import {navPaths} from './nav-paths';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  getNavPaths() {
    return navPaths;
  }

  ngOnInit() {
  }

}
