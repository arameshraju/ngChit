import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { RequestnotfoundComponent } from './requestnotfound/requestnotfound.component';

const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard',      component: DashboardComponent },
{ path: 'support',      component: SupportComponent },

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
    RequestnotfoundComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
