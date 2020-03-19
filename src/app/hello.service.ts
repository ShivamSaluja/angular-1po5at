import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
   
  private heroesUrl = 'https://ghoapi.azureedge.net/api/Dimension'; 
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) {
  }

  getHeroes (): Observable<HttpResponse<String>> {
    console.log("inside hero service mentod get heroes")
    console.log(this.http.get<String>(this.heroesUrl));
    return this.http.get<HttpResponse<String>>(this.heroesUrl);
  }
}