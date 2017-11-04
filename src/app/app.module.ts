import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { ButtonDropdownComponent } from './button-dropdown/button-dropdown.component';
import { ImageDropdownComponent } from './image-dropdown/image-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDropdownComponent,
    ButtonDropdownComponent,
    ImageDropdownComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
