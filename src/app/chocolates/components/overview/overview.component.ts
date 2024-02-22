import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chocolate } from '../../models';
import { Store } from '@ngrx/store';
import {
  GET_CHOCOLATES_REQUEST,
  State,
  getChocolatesData,
  getChocolatesPagination,
} from '../../state';
import { PaginatorComponent } from '../../../shared/components';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, PaginatorComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent implements OnDestroy {
  chocolates: Chocolate[] = [];

  pageIndex = 1;
  pagination = {
    length: 0,
    pageSize: 10,
    pageIndex: 1,
  };

  private subscriptions: Subscription[] = [];

  constructor(private chocolateStore: Store<State>) {
    this.getChocolates();
    this.subscriptions.push(
      this.chocolateStore.select(getChocolatesData).subscribe((response) => {
        this.chocolates = response;
      }),
      this.chocolateStore
        .select(getChocolatesPagination)
        .subscribe((response) => {
          this.pageIndex = response.offset;
          this.pagination = {
            length: response.total,
            pageSize: response.limit,
            pageIndex: response.offset,
          };
        })
    );
  }

  getChocolates(): void {
    this.chocolateStore.dispatch(GET_CHOCOLATES_REQUEST(this.pageIndex));
  }

  handleDirectLinkClick(link: string) {
    if (link) {
      window.open(link);
    }
  }

  handlePageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.getChocolates();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
