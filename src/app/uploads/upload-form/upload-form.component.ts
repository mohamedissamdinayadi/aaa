import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase  } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';

 
 
 import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})

export class UploadFormComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private db:AngularFireDatabase) { }




  function(event: any){
   
    
    const file : File = event.target.files[0];
 
    const metaData = {'contentType': file.type} ;
 
    //const storageRef = firebase.storage().ref().child('images/image.png');
   // storageRef.put(file , metaData);
 //firebase.storage() ;


    
  //const storageRef : firebase.storage.Reference = firebase.storage().ref('/photos/featured/url1').storageRef.put(file , metaData);
 
    console.log("select item",file.name);
    
  }
}
