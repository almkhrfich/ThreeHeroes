import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { AddProdactsComponent } from './components/add-prodacts/add-prodacts.component';
import { EditeProdactsComponent } from './components/edite-prodacts/edite-prodacts.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SinginComponent,
    AddProdactsComponent,
    EditeProdactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
