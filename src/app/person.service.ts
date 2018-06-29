import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}

  getPerson<Person>(){
    return this.http.get(environment.dataUrl + '/person.json');
  }

  getTheme<Theme>(){
    return this.http.get(environment.dataUrl + '/theme.json');
  }

}
