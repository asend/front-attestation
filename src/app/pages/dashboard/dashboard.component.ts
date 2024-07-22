import { Component, OnInit } from '@angular/core';
import {DemandeurService} from "../../services/services/demandeur.service";
import {Demandeur} from "../../services/models/demandeur";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  demandeurs: Array<Demandeur> = [];

  //itemsPerPage = 2;
  //currentPage = 1;
  //totalItems = 0;

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems!: number;

  constructor(private demandeurService: DemandeurService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.demandeurService.demandeurGetAll().subscribe({
      next:(data)=>{
        this.demandeurs = data;
        console.log(data);
        this.totalItems= this.demandeurs.length;
        console.log(this.totalItems);
        
      }
    })
  }

  get paginateData(){
    const star = (this.currentPage-1) * this.itemsPerPage;
    const end = star + this.itemsPerPage;
    return this.demandeurs.slice(star, end);
  }

  changePage(page: number){
    this.currentPage = page;
  }

}
