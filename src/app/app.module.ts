import { SharedModule } from './shared/shared.module';
import { ProjectsModule } from './projects/projects.module';
import { PersonModule } from './person/person.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


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
