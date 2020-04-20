import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios

import { HeroeService } from '../app/servicios/heroe.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,

 
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
