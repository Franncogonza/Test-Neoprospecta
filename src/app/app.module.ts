import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { ReusableTableComponent } from './shared-components/reusable-table/reusable-table.component';
import { ReusableLoadingComponent } from './shared-components/reusable-loading/reusable-loading.component';
import { MatMenuModule } from '@angular/material/Menu';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReusableTableComponent,
    ReusableLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
