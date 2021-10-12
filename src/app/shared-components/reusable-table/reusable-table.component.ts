import { Component, Input, OnInit } from '@angular/core';
import { IReusableTable } from './reusable-table.interface';

@Component({
  selector: 'reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {

  @Input() data: any[] = [];
	// @Input() dataChange: Observable<any>;
  @Input() columns: Array<IReusableTable> = [];

  constructor() { }

  ngOnInit(): void {
    this.columns = this.columns;

  }

  // ngOnChanges() {
	// 	if (this.dataChange) {
	// 		this.dataChange.subscribe((res: any) => {
	// 			this.data = res;
	// 			// this.buildIndexPaginado();
	// 		});
	// 	}
	// }

  editCustomer( customer: any): void {
    console.log( customer)
  }

}
