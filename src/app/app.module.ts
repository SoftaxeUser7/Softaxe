import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard Components/dashboard/dashboard.component';
import { HeaderComponent } from './Dashboard Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AccountsModule } from './accounts/accounts.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Dashboard Components/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';






@NgModule({
  
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,  
    SidebarComponent, LoginComponent, RegisterComponent
      
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
    BsDropdownModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,

  ],

  
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
