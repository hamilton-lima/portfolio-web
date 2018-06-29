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
  filteredProjects: Project[];

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
      this.filteredProjects = projects.map( value => value );
    });
  }

  getTags(){
    const tags: Set<string> = new Set<string>();
    this.projects.forEach( (project)=>{
      project.tags.forEach((tag)=>{
        tags.add(tag);
      })
    });
    return tags;
  }

  filter(filter:string){
    this.filteredProjects = this.projects.filter( (project) =>{
      return project.tags.find( tag => tag == filter);
    });
  }

  ready(){
    return (this.theme && this.person && this.projects);
  }
}
