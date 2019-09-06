import {AfterViewInit, OnInit} from '@angular/core';

declare var $: any;
declare var CKEDITOR: any;

export abstract class LibComponent implements AfterViewInit, OnInit {

  ngAfterViewInit(): void {
    // $.getScript('/assets/js/ckeditor.js');
    $.getScript('https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js');
    $.getScript('/assets/js/looplab.js');
    // CKEDITOR.replace( 'editor' );
    // tslint:disable-next-line:only-arrow-functions
    $('.port-item').click(function() {
      $('.collapse').collapse('hide');
    });

  }

  ngOnInit(): void {

  }

}
