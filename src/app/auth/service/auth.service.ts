import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //apiURL: string = 'http://localhost:8889';
  apiURL: string = 'https://mfpuserspringboot.azurewebsites.net';
  private helper = new JwtHelperService();

  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];
  token!: string;
  public regitredUser : User = new User();
  public loginUser : User = new User();
  public userId!: number;

  constructor(private router: Router, private http: HttpClient) { }

  login(user : User)
  {
    return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    //const decodedToken = this.helper.decodeToken(this.token);
    this.decodeJWT();
  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
    this.getUser(this.loggedUser).subscribe({
      next:(d)=>{
        localStorage.setItem("userId", d.id+"");
      }
    })
  }

  setRegistredUser(user : User){
    this.regitredUser=user;
  }
  getRegistredUser(){
    return this.regitredUser;
  }

  getUser(username: String): Observable<User>{
    const url = `${this.apiURL + '/users'}/${username}`
    return this.http.get<User>(url);
  }

  /*SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.username== curUser.username && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      } });
    return validUser;
  }*/

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return  this.roles.indexOf('ADMIN') >= 0;
  }

  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    this.router.navigate(['/connexion']);
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.userId = Number(localStorage.getItem("userId"));
    this.decodeJWT();
  }

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    //this.getUserRoles(login);
  }
  /*getUserRoles(username :string){ this.users.forEach((curUser) => {
    if( curUser.username == username ) {
      this.roles = curUser.roles;
    } });
  }*/
  getToken(): string {
    return this.token;
  }

  registerUser(user :User){
    return this.http.post<User>(this.apiURL+'/users/register', user,
      {observe:'response'});
  }

  validateEmail(code: string) {
    return this.http.get<User>(this.apiURL+'/users/verifyEmail/'+code);
  }
}
