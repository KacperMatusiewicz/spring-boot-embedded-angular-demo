import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../User";
import {ClientWebService} from "../client-web.service";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;

  name = new FormControl('',Validators.required);
  lastName = new FormControl('',Validators.required);
  clientWebService : ClientWebService;

  constructor(fb : FormBuilder, clientWebService : ClientWebService) {
    this.clientForm = fb.group({
      name: this.name,
      lastName: this.lastName,
    });
    this.clientWebService = clientWebService;
  }

  ngOnInit(): void {
  }

  saveClient() {
    let user : User = new User(this.name.value, this.lastName.value);
    console.log(this.clientForm);
    this.clientWebService.saveUser(user).subscribe((savedUserInfo) => {
      console.log(savedUserInfo)
    });

  }

}
