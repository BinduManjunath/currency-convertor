import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTrendsComponent } from './pages/select-trends/select-trends.component';
import { ConvertCurrencyComponent } from './pages/convert-currency/convert-currency.component';

const routes: Routes = [
  { path: '',   redirectTo: '/conversion', pathMatch: 'full' },
  { path: 'trends', component: SelectTrendsComponent },
  { path: 'conversion', component: ConvertCurrencyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
