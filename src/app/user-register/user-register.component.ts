import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForRegister } from '../model/user';
import { AuthService } from '../services/auth.service';
import { CustomValidators } from '../validators';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user!: UserForRegister;
  userSubmitted!: boolean;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, CustomValidators.match('password')]],
      phone: [null, [Validators.required, Validators.maxLength(12)]]
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email tidak boleh kosong';
    }

    return this.email.hasError('email') ? 'Format email salah' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'Password tidak boleh kosong';
    }

    return this.password.hasError('minlength') ? 'Password minimal 8 karakter' : '';
  }

  getErrorConfirmPassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'Masukkan ulang password';
    }
    return this.registerForm.hasError('match') ? '' : 'Password tidak sama';
  }

  register() {
    console.log(this.registerForm.value);
    this.userSubmitted = true;

    if (this.registerForm.valid) {
        //this.user = Object.assign(this.user, this.registerForm.value);
        this.auth.registerUser(this.userData()).subscribe(() => 
        {
          this.onReset();
          console.log('Register Berhasil');
        }, error => {
          console.log(error)
        });
    }
  }

  onReset() {
    this.route.navigate(['/']);
    this.userSubmitted = false;
    this.registerForm.reset();
  }

  userData(): UserForRegister {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value
    }
  }

  //get value dari field-field
  get userName() {
    return this.registerForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }

}
