import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Module/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  Url='http://localhost:8080/backend/personas';
  
  getPersons(){
    return this.http.get<Person>(this.Url)
  }
}
