import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';



@NgModule({
  declarations: [BotonesComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports:[BotonesComponent]
})
export class SharedModule { }
