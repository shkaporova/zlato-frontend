import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ButtonComponent } from '../ui/button/button.component';
import { IUserProfile } from '../../models/user-profile.model';
import { users } from '../../constants/users-profile.constant';
import { NgFor } from '@angular/common';
import { ITransaction } from '../../models/transaction.model';
import { transactions } from '../../constants/transactions.constant';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'ns-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [MatIcon, ButtonComponent, NgFor, TransactionComponent],
})
export class ProfileComponent {
  public users: IUserProfile[] = users;
  public transactions: ITransaction[] = transactions;
}
