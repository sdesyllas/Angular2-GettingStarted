import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailGuard } from './products/product-guard.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { StarComponent } from './shared/star.component';

import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [ BrowserModule, 
             FormsModule,
             HttpModule,
             RouterModule.forRoot([
               { path: 'products', component: ProductListComponent },
               { path: 'product/:id', canActivate: [ ProductDetailGuard ] ,
                                      component: ProductDetailComponent },
               { path : 'welcome', component: WelcomeComponent },
               { path: '', redirectTo: 'welcome', pathMatch: 'full' },
               { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
             ])
          ],
  declarations: [ 
    AppComponent, 
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ProductFilterPipe
  ],
  providers: [ ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
