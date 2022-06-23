import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ,private router:Router) { }

  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
