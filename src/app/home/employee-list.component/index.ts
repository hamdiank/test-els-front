import {
  Component, Input,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeListResponse} from '../../shared/response';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employee$: Observable<EmployeeListResponse>;

  constructor() { }

  ngOnInit() {
  }

}
