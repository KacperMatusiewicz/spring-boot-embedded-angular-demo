import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class ClientWebService {

  userApiUrl : string = 'http://localhost:8080/api/v1/clients'
  httpClient : HttpClient;
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  constructor(http : HttpClient) {
    this.httpClient = http;
  }

  getAllUsers() {
    return this.httpClient.get(this.userApiUrl);
  }

  saveUser(user : User) {
    return this.httpClient.post<User>(this.userApiUrl, user, this.httpOptions);
  }

  getUserByName(searchName : String)  {
    let tmp = `${this.userApiUrl}/name/${searchName}`;
    return this.httpClient.get(tmp);

  }
  getUserByLastName(searchName : String)  {
    let tmp = `${this.userApiUrl}/lastname/${searchName}`;
    return this.httpClient.get(tmp);

  }
}

/* localhost:8080/api/user/name
     @GetMapping("name/{name}")
    public List<User> getUsersByName(@PathVariable String name){
        return service.getUsersByName(name);
    }
 */
