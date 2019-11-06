import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
    
  constructor(private us: UsersService) {}

  ngOnInit() {}
    // addData() {
    //   this.us.addData(this.name,this.email,this.city,this.address,this.password);
    //   //console.log(this.name)
    // }
  // employees: any[]=[
  //   {
  //     "fname":"Sachin",
  //     "lname":"Singh",
  //     "age":19
  //   },
    
  //   {
  //     "fname":"Tushar",
  //     "lname":"Singh",
  //     "age":20
  //   }
  // ]
  addData() {
    if(this.password.length<10){
      alert('Password Must be atleast 10 Characters long');
    }
    else
    {
      this.us.register(this.name,this.address,this.city,this.password,this.email);
      alert('Registeration Complete');
    }
    console.log(this.password.length)
    // alert(this.password.lenght);
    // console.log(this.name)
  }
  

}  

//////////////////////////////////////////////////////component.ts
