import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token:string;
  constructor( private http:HttpClient) { }
  signUp(email:string,password:string){
     this.http.post<{message:string,token:string,result:object}>('http://localhost:3000/api/signup',{email,password}).subscribe((response)=>{
      console.log(response.result);
    // this.token=response.token;
     })
  }
  login(email:string,password:string){
    this.http.post<{token:string}>('http://localhost:3000/api/login',{email,password}).subscribe(response=>{
     const token=response.token;
      this.token=token
    })
  }
  getToken(){
    return this.token;
  }
}
