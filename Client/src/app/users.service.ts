import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //whenever you want to send some data or to get some data from the backend then httpclient module is required
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }
  addData(name,address,city,password,email) {
      const obj = {name,address,city,password,email};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(name,city, password,address,email, id) {

      const obj = {
          name: name,
          city: city,
          password: password,
          address:address,
          email:email
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    register(name,address,city,password,email) {
        // console.log(password);
        // let length = password.lenght;
        // console.log(length);
          const obj = {name,address,city,password,email};
          this
              .http
              .post(`${this.url}/addRegister`, obj)
              .subscribe(res => console.log(res));
      }
      signIn(email,password){
        const obj = {email, password};
        console.log(obj);
        this
          .http
          .post(`${this.url}/signin`,obj)
          .subscribe((res:any) => {
            if(res.message){
              alert(res.message);
            }
            else{
   
              this.router.navigateByUrl(`/dashboard/${res._id}`);
            }
          });
      }
}

/////////////////////////////////code for service
 
// register(name,address,city,password,email) {
//   // console.log(password);
//   // let length = password.lenght;
//   // console.log(length);
//     const obj = {name,address,city,password,email};
//     this
//         .http
//         .post(`${this.url}/addRegister`, obj)
//         .subscribe(res => console.log(res));
// }