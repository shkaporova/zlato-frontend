import { Component, Input } from '@angular/core';
import { PlateComponent } from '../ui/plate/plate.component';
import { ITransaction } from '../../models/transaction.model';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ns-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
  standalone: true,
  imports: [PlateComponent, MatIcon, DatePipe],
})
export class TransactionComponent {
  @Input() transaction?: ITransaction;
}
