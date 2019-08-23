import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  title = 'Sbootstrap';
  private loading: boolean;

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     switch (true) {
  //       case event instanceof NavigationStart: {
  //         this.loading = true;
  //         break;
  //       }
  //
  //       case event instanceof NavigationEnd:
  //       case event instanceof NavigationCancel:
  //       case event instanceof NavigationError: {
  //         this.loading = false;
  //         // tslint:disable-next-line:only-arrow-functions
  //         console.log('nav');
  //         $(document).ready(function() {
  //           $(this).bootstrapMaterialDesign();
  //         });
  //         break;
  //       }
  //       default: {
  //         break;
  //       }
  //     }
  //   });
  // }

  ngAfterViewInit(): void {
    console.log('root');
    // @ts-ignore
    // tslint:disable-next-line:only-arrow-functions
    // $(document).ready(function() {
    //   console.log(12233);
    //   $('body').bootstrapMaterialDesign();
    // });
    // $('body').bootstrapMaterialDesign();

  }

  ngAfterViewChecked(): void {
    // console.log('after check');
    // $(document).ready(function() {
    //   $('body').bootstrapMaterialDesign();
    // });
  }



}
