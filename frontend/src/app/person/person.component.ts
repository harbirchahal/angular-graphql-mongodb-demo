import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Person } from '../typedefs';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private peopleService: PeopleService
  ) {
    this.route.params
    .pipe(
      switchMap(params => this.peopleService.getOne(+params['id']))
    )
    .subscribe(person => this.editForm.setValue({
      id: person.id,
      firstname: person.firstname,
      lastname: person.lastname,
      email: person.email,
      isActive: person.isActive
    }));
    
    this.editForm = this.formBuilder.group({
      id: new FormControl(0),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl(''),
      isActive: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  onSubmit() {}

}
