import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForLogin } from '../model/user';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  hide = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log('Form Login')
    // const token = this.authService.authUser(loginForm.value);
    this.auth.authUser(loginForm.value).subscribe(
        (response: UserForLogin) => {
            console.log(response);
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('userName', user.userName);
                this.router.navigate(['/']);
            }
        }
    );
  }
}
