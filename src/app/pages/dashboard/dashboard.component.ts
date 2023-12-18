import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule],
  template: /*html*/ `
      <div class="main-content">
        Dashboard works!
      </div>
    `,
  styles: ``,
})
export class DashboardComponent {
  
}
