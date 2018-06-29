import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteLinkComponent } from './site-link/site-link.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  declarations: [SiteLinkComponent],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SiteLinkComponent
  ]
})
export class SharedModule {}
