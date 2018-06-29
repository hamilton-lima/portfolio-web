import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PersonComponent],
  exports: [PersonComponent]
})
export class PersonModule {}
