import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ClientService } from './client.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisuelComponent } from './visuel/visuel.component';
import { ListeFormComponent } from './liste-form/liste-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisuelComponent,
    ListeFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent, ClientService]
})

export class AppModule { }
