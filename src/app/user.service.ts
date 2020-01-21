import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  login(data)
  {
    let uname = data.uname;
    let psw = data.psw;
    if(uname == "shubham.sahel@gmail.com" && psw == "54321")
    {
      console.log("Login Successful");
    }
    else
    {
      console.log("Invalid Credential!");
    }
  }
}
