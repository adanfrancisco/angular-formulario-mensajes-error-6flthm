import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErroresService } from './directivas/errores.service';
import { ErrorControlDirective } from './directivas/error-control.directive';
import {ErrorFormDirective} from "./directivas/error-form.directive"

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ErrorControlDirective, ErrorFormDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ErroresService]
})
export class AppModule { }
