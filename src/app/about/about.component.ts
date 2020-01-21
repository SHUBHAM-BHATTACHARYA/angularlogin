import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABOUTComponent implements OnInit {
  id:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getIdFromLocalStorage();
  }
  getIdFromLocalStorage(){
    this.id = localStorage.getItem("ID");
    console.log("My Id.......",this.id);
  }

  logout(){
    localStorage.removeItem("ID");
    this.router.navigate(['LOGIN']);
  }
}
