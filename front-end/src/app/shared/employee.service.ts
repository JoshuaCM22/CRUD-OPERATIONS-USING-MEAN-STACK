import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  formData: Employee;
  list: Employee[];
  readonly rootURL = 'http://localhost:4000/CRUD_OPERATIONS_USING_MEAN_STACK_DB/';

  constructor(private http: HttpClient) {}

  postEmployee(formData: Employee) {
    return this.http.post(this.rootURL, formData);
  }

  refreshList() {
    this.http
      .get(this.rootURL)
      .toPromise()
      .then((res) => (this.list = res as Employee[]));
  }

  putEmployee(formData: Employee) {
    return this.http.put(this.rootURL + formData._id, formData);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.rootURL + id);
  }
}
