import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './models/project';
import { Observable } from 'rxjs';
import { Person } from './models/person';
import { Theme } from './models/theme';

export class ProjectResult {
  projects: Project[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getTheme(): Observable<Theme> {
    return this.http.get<Theme>(environment.dataUrl + '/theme.json');
  }

  getPerson(): Observable<Person> {
    return this.http.get<Person>(environment.dataUrl + '/person.json');
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.dataUrl + '/projects.json');
  }
}
