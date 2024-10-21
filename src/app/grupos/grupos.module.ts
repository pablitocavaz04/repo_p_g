import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposPageRoutingModule } from './grupos-routing.module';

import { GruposPage } from './grupos.page';
import { SharedModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposPageRoutingModule,
    SharedModule
  ],
  declarations: [GruposPage]
})
export class GruposPageModule {}
