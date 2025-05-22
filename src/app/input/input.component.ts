import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  template: `<h2> Hello {{name}}</h2>`
})
export class InputComponent {

  @Input() name: string='';

}
