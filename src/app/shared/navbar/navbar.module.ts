import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {  OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/cervices/auth.service';
 
@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule implements OnInit{
    isLoggedIn:boolean;
    loggedInUser:string;
    showRegister:boolean;
  
    constructor(
    
    ) { }
  
    ngOnInit() {
       
    }
 
  
  }
 

 
