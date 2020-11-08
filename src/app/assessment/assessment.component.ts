import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CredentialServiceService } from '../credential-service.service';
import { User } from '../credential-service.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  first:string;
  last:String;
  candidateID:String;
  allUsers:User[];

  credentialsActive: boolean;
  credentialsIno:boolean;
  
  questionsActive:boolean;
  
  constructor(private serv:CredentialServiceService) {
    this.credentialsActive =true;
    this.credentialsIno =true;
    this.questionsActive = false;
   }

  ngOnInit(): void {
    this.serv.loadData().subscribe(data=>this.allUsers=data,err=>console.log("HERROR!!!"+err),()=>console.log("DONE!"));
    //console.log(this.allUsers.length);
    //for(let user of this.allUsers){
    //  console.log(user);}
   
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
