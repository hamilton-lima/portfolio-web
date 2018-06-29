import { Component, OnInit } from '@angular/core';
import { Theme } from './models/theme';
import { PortfolioService } from './portfolio.service';
import { Person } from './models/person';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme: Theme;
  person: Person;
  projects: Project[];

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.service.getTheme().subscribe((theme: Theme) => {
      this.theme = theme;
    });

    this.service.getPerson().subscribe((person: Person) => {
      this.person = person;
    });
    
    this.service.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  ready(){
    return (this.theme && this.person && this.projects);
  }
}
