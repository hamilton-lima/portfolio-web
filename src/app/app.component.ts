import { Component, OnInit } from '@angular/core';
import { Theme } from './models/theme';
import { PortfolioService } from './portfolio.service';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: Theme;
  person: Person;

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service.getTheme().subscribe((theme: Theme) => {
      this.theme = theme;
    });

    this.service.getPerson().subscribe((person: Person) => {
      this.person = person;
    });
  }

  ready(){
    return (this.theme && this.person);
  }
}
