import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {EmployeeListComponent} from './employee-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './home.component/home-service';

const components = [
  HomeComponent,
  EmployeeListComponent
];

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule],
  entryComponents:  [],
  providers: [HomeService]
})
export class HomeModule { }
