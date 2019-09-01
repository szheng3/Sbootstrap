import { Component, OnInit } from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent extends LibComponent implements OnInit {

  constructor() {super(); }

  ngOnInit() {
  }

}
