/*import { Component, OnInit } from '@angular/core';
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HandicapService} from "../../auth/service/handicap.service";
import {Handicap} from "../../services/models/handicap";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  dropdownList: Handicap[] = [];
  selectedItems : Handicap[] =[];
  dropdownSettings:IDropdownSettings={};
  dropDownForm!:FormGroup;
  constructor(private fb: FormBuilder,private handicapService: HandicapService) {}
  ngOnInit() {
    this.handicapService.handicapsGetAll().subscribe({
      next:(data)=>{
        this.dropdownList = data;
        //this.selectedItems = data;
        console.log(data);
      }
    })
    this.dropdownSettings = {
      idField: 'id',
      textField: 'libelle',
    };
    this.selectedItems = [
     // {'id': 1, 'libelle': 'visuel'}
    ];
    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItems]
    });
  }

}*/
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface ICountry {
  item_id: number;
  item_text: string;
  image: string;
  isDisabled?: boolean;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  urlPdf: string = "https://pageperso.lis-lab.fr/christophe.gonzales/teaching/mobile/polys/cours2_poly_4.pdf";
  //urlPdf: string = "http://localhost:8888/api/images/loadfromFS/19";
//urlPdf="Users/asend/Desktop/sokhna.pdf";
  urlSafe: any;
  constructor(private santizer: DomSanitizer) { }
  ngOnInit(): void {
    this.urlSafe = this.santizer.bypassSecurityTrustResourceUrl(this.urlPdf);
  }

  selectDocumentType(type: any) {
    this.urlSafe = this.santizer.bypassSecurityTrustResourceUrl(this.urlPdf);
  }
  }
