import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;

  constructor(private us: UsersService) { }

  ngOnInit() {
  }
signIn(){
  this.us.signIn(this.email,this.password);
}

}
