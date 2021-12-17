import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '.';
import { SongBody,SongWithId } from '../content/models';


@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addMovie(body: SongBody) {
    return from(this.store.collection('content').add(body));
  }


  getSongs(): Observable<SongWithId[]> {
    return this.store
      .collection<SongBody>('content', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .get()
      .pipe(
        map((res) =>
          res.docs.map<SongWithId>((d) => ({ ...d.data(), id: d.id }))
        )
      );
  }

  // getSong(id: string): Observable<SongWithId | undefined> {
  //   return this.store
  //     .collection<SongBody>('content', (ref) =>
  //       ref.where('uid', '==', this.auth.userId)
  //     )
  //     .doc(id)
  //     .get()
  //     .pipe(map((res) => res.data()));
  // }
}
