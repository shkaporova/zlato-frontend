import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateComponent } from '../../components/ui/plate/plate.component';
import { MatIcon } from '@angular/material/icon';
import { MenuComponent } from '../../components/menu/menu.component';
import { ProfileComponent } from '../../components/profile/profile.component';

@Component({
  selector: 'ns-dashboard-page',
  standalone: true,
  imports: [
    PlateComponent,
    MatIcon,
    CommonModule,
    MenuComponent,
    ProfileComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {}
