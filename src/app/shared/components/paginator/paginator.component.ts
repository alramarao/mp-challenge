import { Component, EventEmitter, Input, Output } from '@angular/core';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input()
  pageEvent: PageEvent = {
    length: 0,
    pageSize: 10,
    pageIndex: 1
  };

  @Output()
  pageIndexChange = new EventEmitter<number>();

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageIndexChange.emit(e.pageIndex);
  }
}
