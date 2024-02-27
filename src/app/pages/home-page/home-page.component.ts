import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/ui/container/container.component';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { PlateComponent } from '../../components/ui/plate/plate.component';

@Component({
  selector: 'ns-home-page',
  standalone: true,
  imports: [ContainerComponent, HeaderComponent, PlateComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

}
