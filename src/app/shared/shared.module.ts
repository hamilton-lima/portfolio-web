import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ]
})
export class SharedModule {}
