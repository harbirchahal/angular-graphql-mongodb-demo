import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Person } from '../typedefs';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private formBuilder: FormBuilder,
    private peopleService: PeopleService
  ) {
    this.route.params.pipe(
      switchMap(params => this.peopleService.getOne(+params['id']))
    )
    .subscribe(
      person => this.editForm.setValue(person),
      error => this.router.navigate(['../'])
    );
    
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

  onSubmit() {
    this.peopleService
      .update(this.editForm.value)
      .subscribe(() => this.router.navigate(['../']));
  }

}
