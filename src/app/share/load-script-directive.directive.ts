import {Directive, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Directive({
  selector: '[appLoadScriptDirective]',
})
export class LoadScriptDirectiveDirective implements OnInit {

  @Input('script') param: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);


  }

  ngOnInit() {
    if (this.isBrowser) {
      const node = document.createElement('script');
      node.src = this.param;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
