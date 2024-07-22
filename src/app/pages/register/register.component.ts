import { Component, OnInit } from '@angular/core';
import {User} from "../../auth/model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword? : string;
  myForm! : FormGroup
  err: any;
  loading: boolean = false;

  constructor(private formBuilder : FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group(
      {
        prenom : ['', [Validators.required]],
        nom : ['', [Validators.required]],
        nin : ['', [Validators.required]],
        username : ['', [Validators.required]],
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword : ['', [Validators.required]]
      }
    )
  }

  onRegister() {
    this.auth.registerUser(this.user).subscribe({
      next:(data)=>{
        console.log("success")
      }
    })
  }
}
