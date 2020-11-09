import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'}
  )
export class QuizService {

  constructor(private http:HttpClient) { }

  loadData(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>("http://localhost:3001/js");
  } 
}

export class Quiz{
  constructor(public queation: string,
    public an1:string,
    public an2:string,
    public an3:string,
    public an4:string,
    public correct:number){}
}