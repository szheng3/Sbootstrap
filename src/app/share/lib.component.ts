import {AfterViewInit} from '@angular/core';

declare var $: any;
declare var CKEDITOR: any;


export abstract class LibComponent implements AfterViewInit {




  ngAfterViewInit(): void {
    // $.getScript('/assets/js/ckeditor.js');
    $.getScript('https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js');
    $.getScript('/assets/js/looplab.js');
    // CKEDITOR.replace( 'editor' );


  }

}
