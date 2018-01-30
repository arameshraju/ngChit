import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { RequestnotfoundComponent } from './requestnotfound/requestnotfound.component';
import { CustomerComponent } from './actions/customer/customer.component';
import { ChitgroupComponent } from './actions/chitgroup/chitgroup.component';
import { EmployeeComponent } from './actions/employee/employee.component';
import { ReceiptComponent } from './actions/receipt/receipt.component';
import { DisbursementComponent } from './actions/disbursement/disbursement.component';
import { AuctionComponent } from './actions/auction/auction.component';
import { InvgenComponent } from './actions/invgen/invgen.component';
import { FollowupComponent } from './actions/followup/followup.component';
import { DaybookComponent } from './reports/daybook/daybook.component';

const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard',      component: DashboardComponent },
{ path: 'support',      component: SupportComponent },
{ path: 'actions/chitgroup',      component: ChitgroupComponent },
{ path: 'actions/customer',      component: CustomerComponent },
{ path: 'actions/employee',      component: EmployeeComponent },
{ path: 'actions/auction',      component: AuctionComponent },
{ path: 'actions/invgen',      component: InvgenComponent },
{ path: 'actions/followup',      component: FollowupComponent },
{ path: 'actions/receipt',      component: ReceiptComponent },
{ path: 'actions/disburse',      component: DisbursementComponent },
{ path: 'reports/daybook',      component: DaybookComponent },
{ path: '',
redirectTo: '/login',
pathMatch: 'full'
},
{ path: '**', component: RequestnotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SupportComponent,
    RequestnotfoundComponent,
    CustomerComponent,
    ChitgroupComponent,
    EmployeeComponent,
    ReceiptComponent,
    DisbursementComponent,
    AuctionComponent,
    InvgenComponent,
    FollowupComponent,
    DaybookComponent
  ],
  imports: [
    BrowserModule,FormsModule,  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
      ),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
