import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { LinkListComponent } from '../../link-list/link-list.component';
import { mainMenuLinks } from '../../../constants/main-menu-links.constant';

@Component({
  selector: 'ns-menu',
  standalone: true,
  imports: [MatIconModule, ButtonComponent, LinkListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  mainMenuLinks = mainMenuLinks;
}
