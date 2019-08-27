import { Component, OnInit } from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends  LibComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
