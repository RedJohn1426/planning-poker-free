import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TeamsInterface } from '../interfaces/teams.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class TeamsService {

  constructor(private firestore: AngularFirestore) {
    this.firestore.firestore.enablePersistence()
      .catch(err => console.warn(err));
  }

  teams(): Observable<TeamsInterface[]> {
    return this.firestore.collection<TeamsInterface>('teams')
      .snapshotChanges()
      .pipe(
        map(res => res.map(value => {
          const name = value.payload.doc.data().name;
          const id = value.payload.doc.id;
          return { name: name, code: id };
        }))
      )
  }
}
