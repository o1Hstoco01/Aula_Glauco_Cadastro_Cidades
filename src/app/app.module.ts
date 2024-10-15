import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CidadeComponent } from './cidade/cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    CidadeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
