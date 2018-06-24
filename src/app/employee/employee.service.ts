import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';
import {
  map,
  tap,
  catchError
} from 'rxjs/operators';

import {
  Employee
} from './employee';

@Injectable()
export class EmployeeService {
  private _employeeUrl = './assets/api/employees.json';

  constructor(private _http: HttpClient) {}

  getActivities(): Observable < Employee[] > {
    return this._http.get < Employee[] > (this._employeeUrl);
  }

}
