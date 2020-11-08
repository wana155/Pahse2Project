import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable(//{
 // providedIn: 'root'}
)
export class CredentialServiceService {

  constructor(private http:HttpClient) { }

  loadData(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user");
  } 
}

export class User{
  constructor(public fname: string,
    public lname:string,
    public candidateId:number){}
}