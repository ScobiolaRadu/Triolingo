import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private toast: HotToastService,
    ) {}

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit()
  {
    const{email, password} = this.loginForm.value;
    if(!this.loginForm.valid || !email || !password)
      return;

    this.authService.login(email, password).pipe(
      this.toast.observe({
        loading: 'Logging in...',
        success: 'Logged in successfully',
        error: 'Failed to login'
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

}
