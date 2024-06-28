import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroucelComponent } from './carroucel/carroucel.component';
import { CardComponent } from './carroucel/card/card.component';
import { HoverComponent } from './carroucel/card/hover/hover.component';
import { ButtonsComponent } from './carroucel/card/hover/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CarroucelComponent,
    CardComponent,
    HoverComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
