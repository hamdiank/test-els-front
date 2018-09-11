import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeListResponse} from '../../shared/response';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {HomeService} from './home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public filterWay = new FormControl();
  employee$: Observable<EmployeeListResponse>;
  subscriber$;
  constructor( private homeService: HomeService
) {
    this.subscriber$ = this.filterWay
    .valueChanges
      .subscribe(value => {
        this.employee$ = this.homeService.getListEmployee({
          filterBy: value
        });
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscriber$ != null ) {
      this.subscriber$.unsubscribe();
    }
  }
}
