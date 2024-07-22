import {Component, OnInit} from '@angular/core';
import {User} from "../../auth/model/user";
import {AuthService} from "../../auth/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  err!:number;
  private message: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onLoggedin() {
    this.auth.login(this.user).subscribe({
      next:(data)=>{
        let jwToken = data.headers.get('Authorization')!;
        this.auth.saveToken(jwToken)
        if (this.auth.isAdmin()){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/mon-compte']);
        }
      },error: (err: any) => {
        console.log(this.user);
        
        this.err = 1;
        //if (err.error.errorCause=="disabled")
        //  this.message = err.error.message;
      }
    })
  }
}
