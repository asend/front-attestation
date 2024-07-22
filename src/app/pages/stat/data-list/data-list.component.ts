import { Component, OnInit } from '@angular/core';
import { DemandeurService } from 'src/app/auth/service/demandeur.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  paginatedData!: any[];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalItems!: number;

  
constructor(private demandeurService: DemandeurService) { }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.demandeurService.getAllDemandeur(this.currentPage-1, this.itemsPerPage).subscribe(
      (data) => {
        console.log(data.content)
        this.paginatedData = data.content;
        this.totalItems = data.totalElements;
      },
      (error) => {
        // Handle error
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }
}


