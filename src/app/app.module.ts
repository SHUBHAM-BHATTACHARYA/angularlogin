import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day3Component } from './day3/day3.component';
import { LOGINComponent } from './login/login.component';
import { REGISTERComponent } from './register/register.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { NAVBARComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Day3Component,
    LOGINComponent,
    REGISTERComponent,
    HOMEComponent,
    ABOUTComponent,
    CONTACTComponent,
    NAVBARComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
