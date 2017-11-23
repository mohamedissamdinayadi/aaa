import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Club } from '../models/club.module';
import { ClubService } from '../cervices/club.service';
import { SettingsService } from '../cervices/settings.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {

  club:Club = {
    nomClub:'',
    description:'',
    email:'',
    universite:'', 
    phone:'',
    balance:0 ,
  }
  
  //disableBalanceOnAdd : boolean = false ; 
  
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router : Router,
    public ClubService: ClubService,
    public settingsService: SettingsService

  ) { }

  ngOnInit() {
 // this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    
  }
  onSubmit({value, valid}: {value:Club , valid:boolean}){
   
    if(!valid){
      this.flashMessagesService.show('please fill in all fields', {cssClass:'alert-danger', timeout : 4000 }) ;
      this.router.navigate(['addClub']); 
      
    }
    else
    {
      this.ClubService.newClub(value);
      this.flashMessagesService.show('new client added', {cssClass:'alert-success', timeout : 4000 }) ;
      this.router.navigate(['gestionClub']); 
      
    }
    
    
  }
}
