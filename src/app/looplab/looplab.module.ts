import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LooplabRoutingModule } from './looplab-routing.module';
import {HomesectionComponent} from 'src/app/looplab/homesection/homesection.component';
import {ExploresectionComponent} from 'src/app/looplab/exploresection/exploresection.component';
import {ImagesectionComponent} from 'src/app/looplab/imagesection/imagesection.component';
import {SharesectionComponent} from 'src/app/looplab/sharesection/sharesection.component';
import {ProfilesectionComponent} from 'src/app/looplab/profilesection/profilesection.component';
import {FootsectionComponent} from 'src/app/looplab/footsection/footsection.component';
import {HeaderComponent} from 'src/app/looplab/header/header.component';
import { LooplabComponent } from './looplab.component';
import {AppModule} from 'src/app/app.module';
import {LoadScriptDirectiveDirective} from 'src/app/load-script-directive.directive';
import {ShareModule} from 'src/app/share.module';


@NgModule({
  declarations: [
    HomesectionComponent,
    ExploresectionComponent,
    ImagesectionComponent,
    SharesectionComponent,
    ProfilesectionComponent,
    FootsectionComponent,
    HeaderComponent,
    LooplabComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    LooplabRoutingModule,
  ],
})
export class LooplabModule { }
