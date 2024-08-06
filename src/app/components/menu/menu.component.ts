import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ButtonComponent } from '../ui/button/button.component';
import { mainMenuLinks } from '../../constants/main-menu-links.constant';
import { ILinkMenu } from '../../models/main-menu-link.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'ns-menu',
  standalone: true,
  imports: [MatIcon, ButtonComponent, NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public mainMenuLinks: ILinkMenu[] = mainMenuLinks;
}
