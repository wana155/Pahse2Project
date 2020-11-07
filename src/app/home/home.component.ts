import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from "../app.component"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buttonOne(){
    //alert("pushed");
    this.router.navigate(['assessment']); 
    let a = new AppComponent();
    a.changeActive("two");
    
  }
  buttonTwo(){
    this.router.navigate(['contact']); 
    let a = new AppComponent();
    a.changeActive("three");
    
  }

}
