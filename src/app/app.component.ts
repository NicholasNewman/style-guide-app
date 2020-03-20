import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-guide-app';

  constructor(public auth: AngularFireAuth) {
  
  } 



  login(email, pw) {    
    this.auth.signInWithEmailAndPassword(email, pw)
    .catch(err => {
      alert(err.message);
      //console.log('Something went wrong:',err.message);
    });;
    //this.auth.signInWithPopup(new auth.EmailAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
