import { Component, OnInit } from '@angular/core';
import {ClientWebService} from "../client-web.service";
import {User} from "../User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  usersList : any;
  clientWebService : ClientWebService;
  router: any;
  constructor(clientWebService : ClientWebService, router : Router) {
    this.clientWebService = clientWebService;
    this.router = router
  }

  ngOnInit(): void {
  }

  getAll() {
    this.clientWebService.getAllUsers().subscribe(response => {
      this.usersList = response
    });
  }

  show() {
    console.table(this.usersList);
  }


  viewDetails(user: any) {
    console.table(user);
    //this.router.navigateByUrl('clients/details' + user.id);
  }
}
