import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent extends LibComponent implements OnInit  {

  constructor() {super(); }

  ngOnInit() {
    console.log('book init');
    // tslint:disable-next-line:only-arrow-functions
    // $(document).ready(function() {
    //   console.log(1233)
    //   $('body').bootstrapMaterialDesign();
    // });
  }

  // ngAfterViewInit(): void {
  //   super.ngAfterViewInit();
  //   // tslint:disable-next-line:only-arrow-functions
  //   // $.getScript('/assets/js/looplab.js');
  //   // $(document).ready(function() {
  //   //   console.log(1233)
  //   //   $('#bmd').bootstrapMaterialDesign();
  //   //   $('#bmd').bootstrapMaterialDesign();
  //   // });
  //   // $('section').bootstrapMaterialDesign();
  //
  // }

}
