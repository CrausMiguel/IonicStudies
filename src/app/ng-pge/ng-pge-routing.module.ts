import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgPgePage } from './ng-pge.page';

const routes: Routes = [
  {
    path: '',
    component: NgPgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgPgePageRoutingModule {}
