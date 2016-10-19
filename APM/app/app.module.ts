import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';
import{ StarComponent } from './shared/star.component';

import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: 
    [ AppComponent, 
      ProductListComponent,
      StarComponent,
      ProductFilterPipe
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
