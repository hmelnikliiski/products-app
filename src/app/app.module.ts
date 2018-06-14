import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';

import { UpdateProductComponent } from './update-product/update-product.component';

import { AppRoutingModule, routingComponents} from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
