import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

}
