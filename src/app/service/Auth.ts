import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IloginUser, IRegisterUser } from '../Models/auth';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

private users=[
  {
  email:'admin@gmail.com',
  password:'123456'
  }

];

login(email:string, password:string): boolean{
  const user=this.users.find(u=>u.email === email && u.password===password);
  if(user){
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('userEmail',email)

    return true;
  }
  return false;

}

 logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUserEmail() {
    return localStorage.getItem('userEmail');
  }
}









  

