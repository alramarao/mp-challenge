import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';

export const ChocolateRoutes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    
    //Lazyload Details component
    {
        path: ':id',
        loadComponent: () => import('./components/details/details.component').then(c=>c.DetailsComponent)
    }
];
