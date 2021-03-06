import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent implements OnInit {
  loginform:FormGroup;
  uname:AbstractControl;
  psw:AbstractControl;
  remember:AbstractControl;
  constructor(
    // private spinner: NgxSpinnerService,
     private router: Router,
    private formbuilder: FormBuilder,
    private userService: UserService
    ) { 
    this.loginform = formbuilder.group({
      uname: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      psw: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.uname = this.loginform.controls['uname'];
    this.psw = this.loginform.controls['psw'];

  }

  ngOnInit() {
  }
    login()
    {
      console.log("Method Running...................");
      if(this.loginform.value.uname && this.loginform.value.psw)
      {
           let sendData = 
        {
           uname: this.loginform.value.uname,
           psw: this.loginform.value.psw
        }
        console.log('Method Running...................',sendData);
        console.log("My Data Prepared......");
         let data=this.userService.login(sendData);
         if(data==true)
         {
           this.userService.alertForSuccess("Login Successfully","Sucess");
         }
         else
         {
          this.userService.alertForWarning("Invalid Credential Warning","warning");
         }
         this.router.navigate(['ABOUT']);
      }
    }
}