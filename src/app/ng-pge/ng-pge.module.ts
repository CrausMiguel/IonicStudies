import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgPgePageRoutingModule } from './ng-pge-routing.module';

import { NgPgePage } from './ng-pge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgPgePageRoutingModule
  ],
  declarations: [NgPgePage]
})
export class NgPgePageModule {}
