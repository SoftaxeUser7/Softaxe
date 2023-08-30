import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard Components/dashboard/dashboard.component';
import { HeaderComponent } from './Dashboard Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AccountsModule } from './accounts/accounts.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Dashboard Components/sidebar/sidebar.component';





@NgModule({
  

  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,  
    SidebarComponent
      
  ],
 
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    AccountsModule,
    NgSelectModule,
    RouterModule,
    
    
  ],

  
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
