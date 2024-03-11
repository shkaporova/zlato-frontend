import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/ui/container/container.component';
import { HeaderComponent } from '../../components/ui/header/header.component';
import { PlateComponent } from '../../components/ui/plate/plate.component';
import { MatIconModule } from '@angular/material/icon';
import { Balance, balances } from './data';


@Component({
  selector: 'ns-home-page',
  standalone: true,
  imports: [ContainerComponent, HeaderComponent, PlateComponent, MatIconModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit{
  balances = balances;
  selectedBalance: Balance | null = null;
  isActive = false;
  ngOnInit() {
    this.selectedBalance = balances[0];
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }
  selectBalance(balance: Balance) {
    this.selectedBalance = balance;
    this.toggleClass();
  }
}
