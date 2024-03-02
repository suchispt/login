import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Hostname": "ABC",
      "authenticationToken": "123565$"
    });

    const params = new HttpParams()
      .set('PageNum', '10')
      .set('PageSize', '100');

    return this.httpClient.get("https://jsonplaceholder.typicode.com/users", { headers: header, params:params});

  }
}
