import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appLoadScriptDirective]',
})
export class LoadScriptDirectiveDirective implements OnInit {

  @Input('script') param: any;

  ngOnInit() {
    const node = document.createElement('script');
    node.src = this.param;
    node.type = 'text/javascript';
    node.async = false;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
