import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() totalItems!: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  //pages: number[]=[];

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(){
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page+1;
      this.pageChanged.emit(page);
    }
  }

  ngOnInit(): void {
    if (this.totalItems){
      //this.totalPages = Math.ceil(this.totalItems/this.itemsPerPages);
      //this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
      //console.log("pages "+this.pages);
      
    }
  }

}

