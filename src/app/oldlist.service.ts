import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OldlistService {

  constructor(private http:HttpClient) { }
  getOldlist(){
    return this.http.get("http://localhost:4300/oldlist");
  }
}
