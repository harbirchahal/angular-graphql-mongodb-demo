import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import graphql from 'graphql-tag';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { Query, Person, Mutation} from './typedefs';

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
            id,
            firstname,
            lastname,
          }
        }
      `
    }).pipe(
      map(({ data }) => data.persons)
    );
  }

  getOne(id: number): Observable<Person> {
    // @ts-ignore
    return this.apollo.query<Query>({
      query: graphql`
        query ($id: Int!) {
          person (id: $id) {
            id,
            firstname,
            lastname,
            email,
            isActive,
          }
        }
      `,
      variables: {
        id
      }
    }).pipe(
      map(({ data }) => {
        if (data.person)
          return _.omit(data.person, ['__typename']);
        else
          throw new Error(`Person with id ${id} doesn't exist`);
      })
    );
  }

  update(p: Person): Observable<any> {
    return this.apollo.mutate<Mutation>({
      mutation: graphql`
        mutation ($id: Int!, $firstname: String, $lastname: String, $isActive: Boolean) {
          update(id: $id, firstname: $firstname, lastname: $lastname, isActive: $isActive) {
            id,
            firstname,
            lastname,
            email,
            isActive
          }
        }
      `,
      variables: {
        ...p
      }
    });
  }

}
