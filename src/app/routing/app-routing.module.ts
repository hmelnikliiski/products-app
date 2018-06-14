import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductComponent } from './../update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'product/:id/:name/:price', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UpdateProductComponent
]