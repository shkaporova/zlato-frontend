import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateComponent } from '../../components/ui/plate/plate.component';
import { MatIcon } from '@angular/material/icon';
import { MenuComponent } from '../../components/menu/menu.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserBalanceList } from '../../constants/user-balance.constant';
import { IUserBalance } from '../../models/user-balance.model';
import { transactions } from '../../constants/transactions.constant';
import { ITransaction } from '../../models/transaction.model';
import { TransactionComponent } from '../../components/transaction/transaction.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'ns-dashboard-page',
  standalone: true,
  imports: [
    PlateComponent,
    MatIcon,
    CommonModule,
    MenuComponent,
    ProfileComponent,
    HeaderComponent,
    TransactionComponent,
    ChartComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  userBalance: IUserBalance[] = UserBalanceList;
  transactions: ITransaction[] = transactions;
}
