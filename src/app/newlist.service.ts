import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewlistService {

  constructor(private http:HttpClient) { }
  getNewlist(){
    return this.http.get("http://localhost:4300/newlist");
  }
}
