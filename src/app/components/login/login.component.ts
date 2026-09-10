import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 email = '';
  password = '';
  errorMessage = '';

  constructor(
       private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
      const success = this.authService.login(
      this.email,
      this.password
  );

   if (success) {

      this.router.navigate(['/home']);

    } else {

      this.errorMessage = 'Invalid email or password';

    }
  }
  }

