import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated' ; 
import * as firebase from 'firebase/app';
import { Upload } from './upload';
 
 
@Injectable()
export class UploadService {
  constructor(private af: AngularFireDatabase, private db: AngularFireDatabase) { }

private uploadTask : firebase.storage.UploadTask ;

  private basePath:string = '/uploads';

  //uploads: FirebaseListObservable<Upload[]>;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        //upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = this.uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
       // this.saveFileData (upload)
        
      }
    );
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }
  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }
  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }
}

