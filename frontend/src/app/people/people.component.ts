import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../typedefs';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(
    private peopleService: PeopleService
  ) {
    this.people$ = this.peopleService.getAll();
  }

  ngOnInit() {
  }

}
