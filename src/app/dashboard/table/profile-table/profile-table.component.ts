import { Component, OnInit } from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent extends LibComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
