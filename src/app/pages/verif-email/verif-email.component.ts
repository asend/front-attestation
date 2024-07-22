import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrls: ['./verif-email.component.css']
})
export class VerifEmailComponent implements OnInit {

  code!: string;
  err: any;
  constructor() { }

  ngOnInit(): void {
  }

  onValidateEmail() {
    console.log(this.code)
  }
}
