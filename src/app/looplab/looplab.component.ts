import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-looplab',
  templateUrl: './looplab.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./looplab.component.scss'],
})
export class LooplabComponent implements OnDestroy {

  constructor() {
    document.body.classList.add('bg');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg');
  }

}
