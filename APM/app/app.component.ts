import { Component } from '@angular/core'
import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
    pageTitle: string = 'Acme Product Management';
}
