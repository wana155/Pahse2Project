import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {CredentialServiceService} from './credential-service.service';
import {QuizService} from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssessmentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CredentialServiceService,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
