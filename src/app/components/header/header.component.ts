import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { users } from '../../constants/users-profile.constant';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [MatIcon, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  users = users;
}
