import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { AccountOpeningsComponent } from './account-openings/account-openings.component';



@NgModule({
  declarations: [
    ChartOfAccountsComponent,
    AccountOpeningsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule,



  ],
  exports: [
    ChartOfAccountsComponent,
    AccountOpeningsComponent
  ]
})
export class AccountsModule { }
