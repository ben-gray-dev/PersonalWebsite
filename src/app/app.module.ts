import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {NgxTypedJsModule} from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { StyleDirective } from './style.directive';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsCardComponent,
    StyleDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
