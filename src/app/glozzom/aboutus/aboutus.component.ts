import { Component, OnInit } from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent extends LibComponent implements OnInit {

  constructor() {super(); }

  ngOnInit() {

  }

}
