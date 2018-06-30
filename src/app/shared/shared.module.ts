import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteLinkComponent } from './site-link/site-link.component';
import { DateRangeComponent } from './date-range/date-range.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  declarations: [SiteLinkComponent, DateRangeComponent],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SiteLinkComponent,
    DateRangeComponent
  ]
})
export class SharedModule {}
