import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import auth from 'firebase/app';
import { DatabaseService } from '../database/database.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // auth subscribe
  public authGuard = new BehaviorSubject<boolean>(false);
  authG = this.authGuard.asObservable();
  constructor(
    public auth: AngularFireAuth,
    private database: DatabaseService
  ) {}

  setAuth(b: boolean) {
    this.authGuard.next(b);
  }

  getAuth() {
    return this.authGuard.asObservable();
  }

  // get extras
  getAdminExtras() {
    return this.database.getDocumentById(
      this.database.allCollections.extras,
      'userData'
    );
  }
  async loginWithGoogle() {
    return await this.auth.signInWithPopup(new auth.auth.GoogleAuthProvider());
  }
}
