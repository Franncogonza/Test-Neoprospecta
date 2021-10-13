import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild, ViewRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/Table';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/customers.service';
import { EditCustomerModalComponent } from 'src/app/modals/edit-customer-modal/edit-customer-modal.component';
import { IReusableTable } from './reusable-table.interface';

@Component({
  selector: 'reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit{
  dataSource = new MatTableDataSource<any>([]);
  obs: Observable<any[]> | undefined;
  pageSize!: number;
  totalPages!: number;
  ocultarPageSize: boolean = true;
  $vistaMobile = this.customerService.vistaMobile$;

  @Input() data: any[] = [];
  @Input() columns: Array<IReusableTable> = [];
  @Input() action: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private customerService: CustomersService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.setView();
  }

  // ngOnChanges() {
  // 	if (this.dataChange) {
  // 		this.dataChange.subscribe((res: any) => {
  // 			this.data = res;
  // 			// this.buildIndexPaginado();
  // 		});
  // 	}
  // }

  setView() {
    this.columns = this.columns;

    this.dataSource = new MatTableDataSource<any>(this.data);
    if (!(this.changeDetectorRef as ViewRef).destroyed) {
      this.changeDetectorRef.detectChanges();
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.totalPages = this.dataSource.data.length;
    this.obs = this.dataSource.connect();
  }

  editCustomer(customer: any){
    console.log(customer)
    const dialogRef = this.dialog.open(EditCustomerModalComponent, {
      data: customer,
      width: '100%',
      height: '50%'
    });

    dialogRef.afterClosed().subscribe(result => { });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

}