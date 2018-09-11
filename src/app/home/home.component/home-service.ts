import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {
  EmployeeListRequest,
  EmployeeListResponse
} from '../../shared';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/internal/operators';


@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {
  }

  getListEmployee(req: EmployeeListRequest): Observable<EmployeeListResponse> {
    return this.http.get(environment.serviceurl + '?criteria=' + req.filterBy)
      .pipe(
        map((res: EmployeeListResponse) => res ),
        catchError(error =>
          of({
            status: error.status,
            message: error.message,
            employee: []
          })));
  }

}
