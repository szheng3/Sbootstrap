import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {LibComponent} from 'src/app/share/lib.component';

@Component({
  selector: 'app-looplab',
  templateUrl: './looplab.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./looplab.component.scss'],
})
export class LooplabComponent extends LibComponent implements OnDestroy {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId) {
    super();
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
