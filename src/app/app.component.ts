import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from './customers.service';
import { IReusableTable } from './shared-components/reusable-table/reusable-table.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste-neoprospecta';
  public loader: boolean = true;
  public dataChange: Observable<any> | undefined;
  public dataCustomers: any = [];
  public columns: Array<IReusableTable> = [];

  constructor(
    private customerService: CustomersService
  ) { }

  ngOnInit() {
    this.buildHeaderTable();
    this.buildBodytable();

  }

  private buildHeaderTable() {
    this.columns = [];
    this.columns.push(
      { headerName: 'ID', field: 'id' },
      { headerName: 'Nome', field: 'nome'},
      { headerName: 'Idade', field: 'idade' },
      { headerName: 'Cidade', field: 'cidade' },
      { headerName: 'Acciones', field: 'edit' },
    );
  }

  private buildBodytable() {
    this.loader = true;
    this.customerService.getCustomers().subscribe((res) => {
    this.dataCustomers = res;
    this.loader = false;
 });
  }

}
