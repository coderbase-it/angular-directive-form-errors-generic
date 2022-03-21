import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { InvalidTypeDirective } from './invalid-type.directive';
import { InvalidMessageDirective } from './invalid-message.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent,InvalidTypeDirective, InvalidMessageDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
