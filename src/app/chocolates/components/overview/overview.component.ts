import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Chocolate } from '../../models';
import { Store } from '@ngrx/store';
import { GET_CHOCOLATES_REQUEST, State, getChocolatesData } from '../../state';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnDestroy {
  chocolates: Chocolate[] = [];
  private subscriptions: Subscription[] = [];
  
  constructor(private chocolateStore: Store<State>) {
    this.getChocolates();
    this.subscriptions.push(
      this.chocolateStore.select(getChocolatesData).subscribe((response) => {
        this.chocolates = response;
      })
    );
  }

  getChocolates(): void {
    this.chocolateStore.dispatch(GET_CHOCOLATES_REQUEST(1));
  }

  handleDirectLinkClick(link: string) {
    if (link) {
      window.open(link);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
