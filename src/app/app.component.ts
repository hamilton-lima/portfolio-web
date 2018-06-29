import { PortfolioService } from './person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { Theme, SiteLink } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  person: Person;
  theme: Theme;

  constructor(private service: PortfolioService) {
    // this.person = new Person();
    // this.theme = new Theme();
    // this.theme.siteLink = new SiteLink();
  }

  ngOnInit(): void {
    this.service.getPerson().subscribe((person: Person) => {
      this.person = person;
    });

    this.service.getTheme().subscribe((theme: Theme) => {
      this.theme = theme;
      console.log('theme ', theme);
    });
  }
}
