import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [MatIconModule],
  template: /*html*/ `
      <div class="main-content">
        Collections works!
      </div>
    `,
  styles: ``,
})
export class CollectionsComponent {
  
}
