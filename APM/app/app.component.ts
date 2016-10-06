import { Component } from '@angular/core'

    @Component({
    selector: 'pm-app',
    template: `
        <h1>Acme Product Management</h1>
        <div>My First Component</div>
    `
})
export class AppComponent { 
    pagetitle: string = 'Acme Product Management';
}
