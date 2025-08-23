import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxSyncSimulationComponent } from './redux-sync-simulation/redux-sync-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduxSyncSimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
