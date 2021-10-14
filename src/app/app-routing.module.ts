import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customer-list', component: CustomersListComponent },
  { path: 'customer-edit', component: CustomerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
