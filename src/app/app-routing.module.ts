import { RouterModule, Routes } from '@angular/router';

import { AddEditCompanyComponent } from './components/add-edit-company/add-edit-company.component';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { NgModule } from '@angular/core';
import { ViewCompanyComponent } from './components/view-company/view-company.component';

const routes: Routes = [
  {
    path: '', component: ListCompaniesComponent
  },
  {
    path: 'add', component: AddEditCompanyComponent
  },
  {
    path: 'edit/:id', component: AddEditCompanyComponent
  },
  {
    path: 'view/:id', component: ViewCompanyComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
