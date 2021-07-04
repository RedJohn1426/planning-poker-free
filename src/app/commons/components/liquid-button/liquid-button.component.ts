import { Component, Input } from '@angular/core';

@Component({
  selector: 'ppf-liquid-button',
  templateUrl: './liquid-button.component.html',
  styleUrls: ['./liquid-button.component.scss']
})
export class LiquidButtonComponent {
  @Input() text: string = '';

}
