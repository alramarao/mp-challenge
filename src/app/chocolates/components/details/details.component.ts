import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Chocolate } from '../../models';
import { Subscription, filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, UPDATE_CHOCOLATE_DETAILS_REQUEST, getChocolateDetails, getChocolateResponse, resetStateProperty } from '../../state';
import { Nutrition } from '../../models/chocolate.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnDestroy {
  chocolateId = '';
  chocolateDetails: Chocolate | null = null;
  chartLabels: string[] = [];
  chartDataSet: number[] = [];

  chocolateForm!: UntypedFormGroup;

  private subscriptions: Subscription[] = [];
  constructor(
    private chocolateStore: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder
  ) {
    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        this.chocolateId = params['id'];
        if (this.chocolateId) {
          this.getChocolateDetails();
        }
      })
    );
  }

  getChocolateDetails() {
    this.subscriptions.push(
      this.chocolateStore
        .select(getChocolateDetails(this.chocolateId))
        .subscribe((result) => {
          if (!result) {
            this.navigateToOverview();
          } else {
            this.chocolateDetails = result;
            const nutrition: Nutrition = result.nutrition;
            this.chartLabels = Object.keys(nutrition);
            this.chartDataSet = this.chartLabels.map((label) => {
              const element = nutrition[label as keyof Nutrition];
              return typeof element === 'number' ? element : element['total'];
            });

            this.chocolateForm = this.formBuilder.group({
              id: result.id,
              name: [result.name, Validators.required],
              brand: [result.brand, Validators.required],
            });
          }
        }),
      this.chocolateStore
        .select(getChocolateResponse)
        .pipe(filter((response) => response === true))
        .subscribe(() => {
          // Resetting the response field in Chocolate state
          this.chocolateStore.dispatch(resetStateProperty('chocolateResponse'));

          // Redirecting the user back to Chocolates Overview page
          this.navigateToOverview();
        })
    );
  }

  navigateToOverview(): void {
    this.router.navigate(['chocolates']);
  }

  handleSave(): void {
    if (this.chocolateForm.valid) {
      this.chocolateStore.dispatch(
        UPDATE_CHOCOLATE_DETAILS_REQUEST(this.chocolateId, this.getPayload())
      );
    }
  }

  private getPayload = (): Partial<Chocolate> => {
    return {
      name: this.chocolateForm.controls['name'].value,
      brand: this.chocolateForm.controls['brand'].value,
    };
  };

  handleLinkClick(link: string) {
    if (link) {
      window.open(link);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
