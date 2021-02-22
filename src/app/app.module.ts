import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraN } from './barra/barra.component';
import { cardView } from './cardV1/cardV1.component';
import { cardView2 } from './cardV2/cardV2.component';
import { AppFotter } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraN,
    cardView,
    cardView2,
    AppFotter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    BarraN, 
    cardView,
    cardView2,
    AppFotter
  ]
})
export class AppModule { }
