import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  // Certifique-se de que HttpClientModule está aqui
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
