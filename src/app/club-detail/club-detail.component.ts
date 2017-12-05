import { Component, OnInit } from '@angular/core';
import { ClubService} from '../cervices/club.service';
import { Club } from '../models/club';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated' ; 

import { Router , ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  clubs: FirebaseListObservable<any[]>;
  club: FirebaseObjectObservable<any>;

  id:string;
  club1:Club;
 
  constructor(   public  clubService: ClubService,
    public router :Router,
    public route: ActivatedRoute,
    public   flashMessagesService: FlashMessagesService
    

  ) { }

  ngOnInit() { 
    this.id= this.route.snapshot.params['id'];
    this.clubService.getClub(this.id).subscribe(club =>{
       
      this.club=club;
  console.log(this.club);
  
    });
  }
    updateBalance(id:string){
      this.clubService.updateClub(this.id, this.club1);
      this.flashMessagesService.show('balance updated' , {cssClass:'alert-success' , timout:4000});
      this.router.navigate(['/club/'+ this.id]);
    }

    onDeleteClick(id:string){
      if(confirm("are you sure to delete?")){
        this.clubService.deleteClub(this.id);
   this.flashMessagesService.show('Club deleted' , {cssClass:'alert-success' , timout:4000});
        this.router.navigate(['/gestionClub']);
      }
    
    }
    

 
}
