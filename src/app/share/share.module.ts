import {NgModule} from '@angular/core';
import {LoadScriptDirectiveDirective} from 'src/app/share/load-script-directive.directive';

@NgModule({
  declarations: [LoadScriptDirectiveDirective],
  imports: [],
  exports: [
    LoadScriptDirectiveDirective,
  ],
})
export class ShareModule {}
