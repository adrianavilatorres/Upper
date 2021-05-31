import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { title } from 'process';
import { Observable } from 'rxjs';




const firebaseConfig = {
  apiKey: "AIzaSyBIVoS-ebm0AybTAD97lsHxN5mLfGuqXm0",
  authDomain: "upper-7d1b6.firebaseapp.com",
  projectId: "upper-7d1b6",
  storageBucket: "upper-7d1b6.appspot.com",
  messagingSenderId: "497996661118",
  appId: "1:497996661118:web:2aade2b3b7c9aaa412b32f",
  measurementId: "G-0TY01MLKSF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var db = firebase.firestore();



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  

  constructor() { 

    console.log('Firebase service started!!!');
    

  }




    async getVideos(): Promise<any>{

    // const snapshot = await firebase.firestore().collection('videos').get()
    // return snapshot.docs.map(doc => doc.id);
    var videosList: any[] = [];

    db.collection("videos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            videosList.push(doc.data())
        });
        
        
        
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
    
    return videosList;
    
  }

  async getVideosFromCategory(category: string): Promise<any>{

    var videosList: any[] = [];

    db.collection("videos")
    .where('category', '==', category)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            videosList.push(doc.data())
        });
        
        
        
        
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
    
    return videosList;
    
  }

  async getVideo(id: string): Promise<any>{
       
       
    //var docRef = db.collection("videos").doc(id);

    var lista: any[] = [];

    db.collection("videos")
    .where('id', '==', id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            lista.push(doc.data())
        });
        

    // docRef.get().then((doc: any) => {
    //   if (doc.exists) {
          
          
    //       lista = doc.data();
    //       console.log(lista);
          
    //   } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //   }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
     });

    return lista;
    
  }

  async getVideoSearch(text: string): Promise<any>{
       
       
      //var docRef = db.collection("videos").doc(id);
  
      var lista: any[] = [];
  
      db.collection("videos")
      
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(doc.data());

              if(true){
                lista.push(doc.data())
              }
              
              
          });
          
  
      // docRef.get().then((doc: any) => {
      //   if (doc.exists) {
            
            
      //       lista = doc.data();
      //       console.log(lista);
            
      //   } else {
      //       // doc.data() will be undefined in this case
      //       console.log("No such document!");
      //   }
      // }).catch((error) => {
      //     console.log("Error getting document:", error);
       });
  
      return lista;
      
    
  }


  
  




}
