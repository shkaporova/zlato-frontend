import { Component, Input } from '@angular/core';

@Component({
  selector: 'ns-button, [nsButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.main]': '!theme || theme === "main"',
    '[class.active]': 'theme === "active"',
  },
})
export class ButtonComponent {
  @Input('nsButton') theme: 'main' | 'active' | '' = 'main';
}
