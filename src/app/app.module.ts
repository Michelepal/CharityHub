import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigazioneComponent } from './header/navigazione.component';
import { TitoloComponent } from './header/titolo.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/componentihome/banner.component';
import { IniziativeComponent } from './home/componentihome/iniziative.component';
import { AssociazioniComponent } from './home/componentihome/associazioni.component';
import { FrecciagiuComponent } from './shared/frecciagiu.component';
import { ListainiziativeComponent } from './listainiziative/listainiziative.component';
import { ListaassociazioniComponent } from './listaassociazioni/listaassociazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigazioneComponent,
    TitoloComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    BannerComponent,
    IniziativeComponent,
    AssociazioniComponent,
    FrecciagiuComponent,
    ListainiziativeComponent,
    ListaassociazioniComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
