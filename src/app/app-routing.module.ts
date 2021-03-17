import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPurchasedComponent } from './orders-purchased/orders-purchased.component'

const routes: Routes = [
  { path : 'orders-purchased', component : OrdersPurchasedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
