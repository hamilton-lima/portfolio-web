import { PersonService } from './person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  person: Person = new Person();

  constructor(private service: PersonService) {}

  ngOnInit(): void {
    this.service.getPerson().subscribe((person: Person) => {
      this.person = person;
    });
  }
}
