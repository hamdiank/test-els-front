import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/index#HomeModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
