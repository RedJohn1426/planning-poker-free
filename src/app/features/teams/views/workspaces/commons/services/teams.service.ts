import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team.interface';
import { map } from 'rxjs/operators';
import { TeamModel } from '../models/team.model';

@Injectable()
export class TeamsService {

  constructor(private firestore: AngularFirestore) { }

  async addTeam(value: {name: string, password: string}) {
    const team = await this.firestore.collection('teams').doc();
    await team.set({ ...value, status: true });
    await team.collection('game').doc('details').set({ users: [] })
  }

  teams(): Observable<TeamModel[]> {
    return this.firestore.collection<Team>('teams')
      .snapshotChanges()
      .pipe(
        map(res => res.map(value => {
          const data = value.payload.doc.data();
          const id = value.payload.doc.id;
          return new TeamModel(id, data);
        })),
      )
  }
}
