import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser!: any;
  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('userName');
    return this.loggedinUser;
  }

  onLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
  }

}
