import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private toastr: ToastrService
  ) { }
  login(data)
  {
    let uname = data.uname;
    let psw = data.psw;
    if(uname == "shubham.sahel@gmail.com" && psw == "54321")
    {
      let id=uuid();
      console.log("ID",id);
      console.log("Login Successful");
      localStorage.setItem("ID",id);
      return true;
    }
    else
    {
      console.log("Invalid Credential!");
    }
  }
  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}
