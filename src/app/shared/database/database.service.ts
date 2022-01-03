import { map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
export interface QueryObj {
  field: any;
  operator: any;
  value: any;
}
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // path
  public adminAccessPath = 'admin/secure/panel';

  public frb: any = firebase;
  public allCollections = {
    users: 'users',
    products: 'products',
    extras: 'extras',
    orders: 'orders',
  };
  // Admin instance of firebase to create new users, this is to avoid messing up the
  // auth token post user creation for the .currentUser data
  public adminFrb: any = firebase.initializeApp(
    environment.firebaseConfig,
    'admin'
  );

  constructor(public afs: AngularFirestore, public auth: AngularFireAuth) {
    // TBA
  }
  // create
  addDocument(collection: string, docObject: any) {
    return this.afs.collection(collection).add(docObject);
  }
  generateDocuemnetRef(collection: string) {
    return this.afs.collection(collection).doc();
  }
  // Read
  getDocumentById(collection: string, id: string) {
    return this.afs.collection(collection).doc(id).ref.get();
  }
  getAllDocuments(collection: string) {
    return this.afs.collection(collection).ref.get();
  }
  getAllDocumentsByQuery(
    collection: string,
    queryObj: any[] = [],
    textSearchObj: any = null,
    limit: number = null,
    orderby: any[] = []
  ) {
    return this.afs
      .collection(collection, (ref) =>
        this.buildQuery(ref, queryObj, textSearchObj, limit, orderby)
      )
      .get()
      .toPromise();
  }
  // read and watch
  getDocumentSnapshotById(collection: string, id: string) {
    return this.afs.collection(collection).doc(id).snapshotChanges();
  }
  getAllDocumentsSnapshot(collection: string) {
    return this.afs.collection(collection).snapshotChanges();
  }
  getAllDocumentsSnapshotByQuery(
    collection: string,
    queryObj: any[] = [],
    textSearchObj: any = null,
    limit: number = null,
    orderby: any[] = []
  ) {
    return this.afs
      .collection(collection, (ref) =>
        this.buildQuery(ref, queryObj, textSearchObj, limit, orderby)
      )
      .snapshotChanges();
  }
  buildQuery(
    ref,
    queryObj: any[] = [],
    textSearchObj: any = null,
    limit: number = null,
    orderby: any[] = []
  ) {
    queryObj.forEach((q) => {
      console.log('queries', q);
      ref = ref.where(q.field, q.operator, q.value);
    });
    orderby.forEach((ob) => {
      ref = ref.orderBy(ob.field, ob.order);
    });
    if (limit) {
      ref = ref.limit(limit);
    }
    console.log('reference are:', ref);
    return ref;
  }
  // Update
  setDocument(
    collection: string,
    id: string,
    docObject: any,
    merge: boolean = false
  ) {
    return this.afs.collection(collection).doc(id).set(docObject, { merge });
  }
  updateDocument(collection: string, id: string, docObject: any) {
    return this.afs.collection(collection).doc(id).update(docObject);
  }
  // Delete
  deleteDocument(collection: string, id: string) {
    return this.afs.collection(collection).doc(id).delete();
  }
  // Delete subcollections
  deleteSubcollectionDocument(
    collection: string,
    docid: string,
    subcollections: string,
    subDocid: string
  ) {
    return this.afs
      .collection(collection)
      .doc(docid)
      .collection(subcollections)
      .doc(subDocid)
      .delete();
  }
  // transaction and batch
  setTransactDocument(
    transRef: any,
    docRef: any,
    docObject: any,
    merge: boolean = false
  ) {
    return transRef.set(docRef, docObject, { merge });
  }
  updateTransactDocument(transRef: any, docRef: any, docObject: any) {
    return transRef.update(docRef, docObject);
  }
  deleteTransactDocument(transRef: any, docRef: any) {
    return transRef.delete(docRef);
  }

  getServerTime(uid) {
    let sessionsRef = this.frb.database().ref('sessions/' + uid);
    return sessionsRef
      .set({
        serverTime: this.frb.database.ServerValue.TIMESTAMP,
      })
      .then(function () {
        return sessionsRef.once('value');
      })
      .then(function (snapshot) {
        let data = snapshot.val();
        return data;
      });
  }

  SendAdminAuthVerificationMail() {
    return this.adminFrb
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
