import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/customers.service';
import { IReusableTable } from 'src/app/shared-components/reusable-table/reusable-table.interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  public loader: boolean = true;
  public dataChange: Observable<any> | undefined;
  public dataCustomers: any = [];
  public columns: Array<IReusableTable> = [];

  @HostListener('window:resize', ['$event']) onResize(event:any) {
    if (event.target.innerWidth <= 700) this.customerService.vistaMobile$.next(true);
    else this.customerService.vistaMobile$.next(false);
  }

  constructor(
    private customerService: CustomersService
  ) { }

  ngOnInit() {
  this.setView();
  }

  setView(){
    this.validateScreenSize();
    this.buildHeaderTable();
    this.buildBodytable();
  }

  private buildHeaderTable() {
    this.columns = [];
    this.columns.push(
      { headerName: 'ID', field: 'id' },
      { headerName: 'Nome', field: 'name'},
      { headerName: 'Idade', field: 'age' },
      { headerName: 'Cidade', field: 'city' },
    );
  }

  private buildBodytable() {
    this.loader = true;
    this.customerService.getCustomers().subscribe((res) => {
    this.dataCustomers = res;
    this.loader = false;
 });
  }

  validateScreenSize() {
    if (window.innerWidth <= 768) this.customerService.vistaMobile$.next(true);
    else this.customerService.vistaMobile$.next(false);
  }

}
