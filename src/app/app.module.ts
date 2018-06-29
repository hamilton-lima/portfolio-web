import { SharedModule } from './shared/shared.module';
import { ProjectsModule } from './projects/projects.module';
import { PersonModule } from './person/person.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    PersonModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
