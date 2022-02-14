import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LatestComponent } from './latest/latest.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoricalComponent } from './historical/historical.component';
import { findCodeLabel } from './globalAlgorithms/findCodeLabel';
import { exportToExcel } from './globalAlgorithms/exportToExcel';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MenuComponent,
    LatestComponent,
    HistoricalComponent,
    FooterComponent
  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot([
      { path: '', component: MenuComponent, pathMatch: 'full' },
      { path: 'latest', component: LatestComponent, pathMatch: 'full' },
      { path: 'historical', component: HistoricalComponent, pathMatch: 'full' }
    ])
  ],
  providers: [findCodeLabel,exportToExcel],
  bootstrap: [AppComponent]
})
export class AppModule { }
