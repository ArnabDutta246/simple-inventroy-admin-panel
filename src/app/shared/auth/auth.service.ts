import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth subscribe
  public authGuard = new BehaviorSubject<boolean>(false);
  authG = this.authGuard.asObservable();
  constructor(public auth: AngularFireAuth) {}

  setAuth(b: boolean) {
    this.authGuard.next(b);
  }

  getAuth() {
    return this.authGuard.asObservable();
  }

  // createUser(email, password) {
  //   return this.auth.createUserWithEmailAndPassword(email, password);
  // }
  signInUser(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}
