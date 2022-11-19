import { AddEditCompanyComponent } from './components/add-edit-company/add-edit-company.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCompanyComponent } from './components/view-company/view-company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditCompanyComponent,
    ListCompaniesComponent,
    ViewCompanyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
