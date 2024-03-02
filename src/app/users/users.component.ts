import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: any = '';

  constructor(private userService: UsersService){
  }



  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
    });
  }

}
