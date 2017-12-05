import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated' ; 
import { Observable } from 'rxjs';
import { Club } from '../models/club';

@Injectable()
export class ClubService {
  clubs: FirebaseListObservable<any[]>;
  club: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.clubs = this.af.list('/clubs') as FirebaseListObservable<Club[]>;
  }

  getClubs(){
    return this.clubs;
  }
  newClub(club:Club){
    this.clubs.push(club);
  }
  getClub(id:string){
    this.club=this.af.object('/clubs/'+id) as FirebaseObjectObservable<Club>;
    return this.club;
  }
 

  updateClub(id:string, club:Club){
    return this.clubs.update(id, club);
  }
  
 
  deleteClub(id:string){
    return this.clubs.remove(id);
  }



}