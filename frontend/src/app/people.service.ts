import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import graphql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Query, Person} from './typedefs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private apollo: Apollo
  ) { }

  getAll(): Observable<Person[]> {
    return this.apollo.query<Query>({
      query: graphql`
        query {
          persons {
            id
            firstname
            lastname
          }
        }
      `
    }).pipe(
      map(result => result.data.persons)
    );
  }

  getOne(id: number): Observable<Person> {
    // @ts-ignore
    return this.apollo.query<Query>({
      query: graphql`
        query ($id: Int!) {
          person (id: $id) {
            id
            firstname
            lastname
            email
            isActive
          }
        }
      `,
      variables: {
        id
      }
    }).pipe(
      map(result => result.data.person)
    );
  }

}
