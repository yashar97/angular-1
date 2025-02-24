import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiniNavbarComponent } from './components/mini-navbar/mini-navbar.component';
import { PortadaComponentComponent } from './components/portada-component/portada-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiniNavbarComponent,
    PortadaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
