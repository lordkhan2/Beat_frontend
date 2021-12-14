import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export class userdata{
//   constructor(public data:object){}
// }

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http:HttpClient
  ) { }

  getUser(){
    return this.http.get<any>('http://localhost:8000/auth/users/')
    //console.log("i am data")
  }
}

