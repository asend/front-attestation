import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginnation',
  templateUrl: './paginnation.component.html',
  styleUrls: ['./paginnation.component.css']
})
export class PaginnationComponent implements OnInit {

  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPages: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages = 0;
  pages: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.totalItems){
      this.totalPages = Math.ceil(this.totalItems/this.itemsPerPages);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);
      
    }
  }

  pageClicked(page: number) {
    if (page>this.totalPages || page==0) return;
    this.onClick.emit(page);
  }

}
