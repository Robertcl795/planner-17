import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [],
  template: `
    <p>
      collection works!
    </p>
  `,
  styles: ``
})
export class CollectionComponent {
  @Input()
  set id(collectionId: string) {
    console.log(collectionId);
  } 
}
