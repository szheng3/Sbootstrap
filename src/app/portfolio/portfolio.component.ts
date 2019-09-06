import { Component, OnInit } from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent extends LibComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
