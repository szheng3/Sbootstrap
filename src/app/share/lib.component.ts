import {AfterViewInit} from '@angular/core';

declare var $: any;


export abstract class LibComponent implements AfterViewInit {




  ngAfterViewInit(): void {
    $.getScript('/assets/js/looplab.js');

  }

}
