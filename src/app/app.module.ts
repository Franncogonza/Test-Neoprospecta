import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReusableTableComponent } from './shared-components/reusable-table/reusable-table.component';
import { ReusableLoadingComponent } from './shared-components/reusable-loading/reusable-loading.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { EditCustomerModalComponent } from './modals/edit-customer-modal/edit-customer-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { FormEditCustomerComponent } from './shared-components/form-edit-customer/form-edit-customer.component';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ReusableTableComponent,
    ReusableLoadingComponent,
    EditCustomerModalComponent,
    HomeComponent,
    CustomersListComponent,
    CustomerEditComponent,
    FormEditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
