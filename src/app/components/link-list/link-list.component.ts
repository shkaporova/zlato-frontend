import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '../ui/button/button.component';
import { ILinkMenu, LinksMenuLabel } from '../../models/main-menu-links.model';

@Component({
  selector: 'ns-link-list',
  standalone: true,
  imports: [MatIconModule, NgFor, ButtonComponent],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss',
})
export class LinkListComponent {
  @Input() links: ILinkMenu[] = [];
}
