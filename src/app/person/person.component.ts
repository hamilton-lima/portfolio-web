import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';
import { Theme } from '../models/theme';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person: Person;
  @Input() theme: Theme;

}
