import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-looplab',
  templateUrl: './looplab.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./looplab.component.scss'],
})
export class LooplabComponent implements OnDestroy {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      document.body.classList.add('bg');

    }

  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.body.classList.remove('bg');

    }
  }

}
