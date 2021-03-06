import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  vistaMobile$: BehaviorSubject<any> = new BehaviorSubject(false);

  urlRequest = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.getDataContent<string>(`${this.urlRequest}`);
  }

  private getDataContent<T>(resource: string) {
    return this.http.get(resource);
  }

  customerEdit(customerId: number, body: any) {
    return this.http.put(`${this.urlRequest}/${customerId}`, body)
      .pipe(map((responsePost: any) => responsePost));
  }
}