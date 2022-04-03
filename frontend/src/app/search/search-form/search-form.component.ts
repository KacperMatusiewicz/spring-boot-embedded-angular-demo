import { Component, OnInit } from '@angular/core';
import {ClientWebService} from "../../clients/client-web.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchField: string;
  searchModeName: boolean;
  clientWebService : ClientWebService;

  constructor(clientWebService : ClientWebService) {
    this.searchField = "";
    this.searchModeName = true;
    this.clientWebService = clientWebService;
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if(this.searchModeName){
      //console.log(true)

      this.clientWebService.getUserByName(this.searchField).subscribe((response)=>{
        console.table(response)
      });
    }else {
      this.clientWebService.getUserByLastName(this.searchField).subscribe((response) => {
        console.table(response)
        //console.log(false)

      });
    }

    /*
    this.clientWebService.getUserByName(this.searchField).subscribe((response)=>{
      console.table(response);
    });

     */
    //console.log(this.searchField);
  }

}
