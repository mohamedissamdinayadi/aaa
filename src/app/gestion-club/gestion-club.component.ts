import { Component, OnInit } from '@angular/core';
import { ClubService } from '../cervices/club.service';
import { Club } from '../models/club';
import { log } from 'util';
 
@Component({
  selector: 'app-gestion-club',
  templateUrl: './gestion-club.component.html',
  styleUrls: ['./gestion-club.component.css']
})
export class GestionClubComponent implements OnInit {
  clubs:any[];
  constructor(
    public clubService:ClubService
  ) { }

 
 
  ngOnInit(){
 


      this.clubService.getClubs().subscribe(clients => {
        this.clubs = clients;
       
         
        
      });


  
  }
}
