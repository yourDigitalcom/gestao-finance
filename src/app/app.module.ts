import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes/routes-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { CardComponent } from './components/menu/menu.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CervejasComponent } from './pages/cervejas/cervejas.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsProductsComponent } from './components/cards-products/cards-products.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CardSelectComponent } from './components/card-select/card-select.component';


import { AddButtonComponent } from './components/add-button/add-button.component';
import { GastosService } from './services/service.service';
import { SessionService } from './services/session/session.service';
import { NewModalShareComponent } from './components/modal-share/new-modal-share.component';
import { NewBodyShareComponent } from './components/modal-share/new-body-share.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CardComponent,
    CardapioComponent,
    CervejasComponent,
    NavbarComponent,
    CardsProductsComponent,
    HomeComponent,
    CardSelectComponent,
    AddButtonComponent,
    NewBodyShareComponent,
    NewModalShareComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesRoutingModule,
    CurrencyMaskModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MaterialModule,
  ],
  providers: [
    HttpClient,
    GastosService,
    SessionService,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
