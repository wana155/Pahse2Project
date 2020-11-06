import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  first:string;
  last:String;
  candidateID:String;

  credentialsActive: boolean;
  credentialsIno:boolean;
  
  questionsActive:boolean;
  constructor() {
    this.credentialsActive =true;
    this.credentialsIno =true;
    this.questionsActive = false;
   }

  ngOnInit(): void {
  }
  credentials(){
    //Check here if the  redentials are valid
    if (true)//if credentials are valid and match server records
    {this.credentialsIno =false;

    }
    else{alert("Sorry, Credentials are invalid, Try again");
        this.first='';
        this.last='';
        this.candidateID='';
        }
  }
  option(i){
    this.credentialsActive=false;
    this.questionsActive = true;

   //get the data for corret set of questions here

  }
 
}
