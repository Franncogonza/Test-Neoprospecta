import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

   urlRequest = 'http://private-92a969-processoseletivo1.apiary-mock.com/customers';

  constructor(private http: HttpClient) { }

 getCustomers () {
    return this.getDataContent<string>(`${this.urlRequest}`);
  }

  private getDataContent<T>(resource: string) {
    return this.http.get(resource);
  }

}
