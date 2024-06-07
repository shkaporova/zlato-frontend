import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateComponent } from '../../components/ui/plate/plate.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from '../../components/ui/menu/menu.component';

@Component({
  selector: 'ns-home-page',
  standalone: true,
  imports: [PlateComponent, MatIconModule, CommonModule, MenuComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

}
