import {NgModule} from '@angular/core';
import {LoadScriptDirectiveDirective} from 'src/app/share/load-script-directive.directive';
import { LibComponent } from 'src/app/share/lib.component';

@NgModule({
  declarations: [LoadScriptDirectiveDirective, LibComponent],
  imports: [],
  exports: [
    LoadScriptDirectiveDirective, LibComponent
  ],
})
export class ShareModule {}
