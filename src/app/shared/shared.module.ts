import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteLinkComponent } from './site-link/site-link.component';
import { DateRangeComponent } from './date-range/date-range.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [SiteLinkComponent, DateRangeComponent],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SiteLinkComponent,
    DateRangeComponent,
    FontAwesomeModule
  ]
})
export class SharedModule {}
