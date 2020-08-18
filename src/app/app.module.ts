/**
 * @author bindu.m
 * @description App Module
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './shared/components/currency-selector/currency-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { CurrencyTrendsComponent } from './shared/components/currency-trends/currency-trends.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent,
    CurrencyTrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
