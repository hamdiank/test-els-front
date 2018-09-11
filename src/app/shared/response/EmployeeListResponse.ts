import {Employee} from '../models';

export interface EmployeeListResponse {
  employee: Employee[];
  status?: string;
  message?: string;
}
