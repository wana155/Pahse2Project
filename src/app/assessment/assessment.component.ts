import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { CredentialServiceService } from '../credential-service.service';
import { User } from '../credential-service.service';
import { Quiz, QuizService } from '../quiz.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  first:string;
  last:String;
  candidateID:number;
  correcta:number;
  texti:String;
  displayment:number;

  allUsers:User[];
  allQuestions: Quiz[];
  currentIndex:number;
  currentQuestion:Quiz;
  reponses:number[];

  credentialsActive: boolean;
  credentialsIno:boolean;
  questionsActive:boolean;
  resultsActive:boolean;
  submitb:boolean;
  constructor(private serv:CredentialServiceService,private quizServ:QuizService) {
    this.credentialsActive =true;
    this.credentialsIno =true;
    this.questionsActive = false;
    this.resultsActive =false;
    this.submitb=true;

    this.reponses = new Array();
    this.currentIndex =0;
    for (let i=0;i<10;i++){
      this.reponses[i]=5;
    }
   }

  ngOnInit(): void {
    this.serv.loadData().subscribe(data=>this.allUsers=data,err=>console.log("HERROR!!!"+err),()=>console.log("DONE!"));
    this.quizServ.loadData().subscribe(data=>this.allQuestions=data,err=>console.log("HERROR_QUIZ"+err),()=>console.log("DONE!QUIZ"));
    
    //console.log(this.allUsers.length);
   
  }

  credentials(){
    //Check here if the  redentials are valid
    let i=0; let foud=false;
   for(i=0;i<this.allUsers.length;i++){
        if (this.allUsers[i].fname==this.first.toLowerCase() && this.allUsers[i].lname==this.last.toLowerCase() && this.allUsers[i].candidateId==this.candidateID ){
          foud = true;
        }
    }
    if (foud)//if credentials are valid and match server records
    {this.credentialsIno =false;
    }
    else{alert("Sorry, Credentials are invalid, Try again");
        this.first='';
        this.last='';
        this.candidateID=null;
        }
  }
  

  quizOption(i){
    this.credentialsActive=false;
    this.questionsActive = true;
    this.displayment = 10 *(i-1); // Compute displayment to select the correct set of questions according to the quiz type.
  }

  anOption(opt){
    this.reponses[this.currentIndex]=opt;

    //Reset the active element
    var contenedores=document.getElementById("conte");
    var children = contenedores.children;
 for (var i = 0; i < children.length; i++) {
   var Child = children[i];
     Child.setAttribute("class","formi");
  }

   if (opt==1){
    var cate=document.getElementById("aone");
    cate.setAttribute("class","list-group-item list-group-item-action active");}
  if (opt==2){
      var cate=document.getElementById("atwo");
      cate.setAttribute("class","list-group-item list-group-item-action active");}
  if (opt==3){
        var cate=document.getElementById("athree");
        cate.setAttribute("class","list-group-item list-group-item-action active");}
  if (opt==4){
    var cate=document.getElementById("afour");
    cate.setAttribute("class","list-group-item list-group-item-action active");}

 }

  
  next(){
    if(this.currentIndex==9)
    {
      alert("You are about to submit this quiz!");
        this.resultsActive=true;
        this.questionsActive=false;
        this.correcta=0;
        for(let i=0;i<10;i++){
          if (this.reponses[i]==this.allQuestions[i+this.displayment].correct)
          {this.correcta++;}
        }
        if(this.correcta>=7)
        {this.texti ="✅ Congratulations! You have passed the assessment."; }
        else{this.texti =" ❌ UGH! You failed the test! You need at least 7 correct answers.";}
    }
    else{

    if(this.reponses[this.currentIndex]!=5) //deabilitate the button here
    this.currentIndex++;
      if (this.currentIndex==9){this.submitb=false;}

     //Reset the active element
    var contenedores=document.getElementById("conte");
    var children = contenedores.children;
 for (var i = 0; i < children.length; i++) {
   var Child = children[i];
     Child.setAttribute("class","formi");
  }


}

  }

}
