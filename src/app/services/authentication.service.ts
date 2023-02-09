import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, updateProfile} from '@angular/fire/auth';
import { from } from 'rxjs';
import { authState } from 'rxfire/auth';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({user}) => updateProfile(user, {displayName: name}))
    );
  }

  logout(){
    return from(this.auth.signOut());
  }
}
