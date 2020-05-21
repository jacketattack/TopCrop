import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillOfLadingComponent } from './bill-of-lading/bill-of-lading.component';


const routes: Routes = [
  {
    path: '',
    component: BillOfLadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
