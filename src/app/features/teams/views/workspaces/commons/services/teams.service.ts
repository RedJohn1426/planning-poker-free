import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';
import { map } from 'rxjs/operators';
import { TeamModel } from '../models/team.model';

@Injectable()
export class TeamsService {

  constructor(private firestore: AngularFirestore) { }

  async addTeam(name: string) {
    const team = await this.firestore.collection('teams').doc();
    await team.set({ name: name, status: true });
    await team.collection('game').doc('details').set({ users: [] })
  }

  teams(): Observable<TeamModel[]> {
    return this.firestore.collection<Team>('teams')
      .snapshotChanges()
      .pipe(
        map(res => res.map(value => {
          const name = value.payload.doc.data().name;
          const status = value.payload.doc.data().status;
          const id = value.payload.doc.id;
          return new TeamModel({ name: name, code: id, status: status });
        }))
      )
  }
}
