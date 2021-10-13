import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-form-edit-customer',
  templateUrl: './form-edit-customer.component.html',
  styleUrls: ['./form-edit-customer.component.scss']
})
export class FormEditCustomerComponent implements OnInit {
  @Input() data: any;
  @Input() noModal: boolean = false;

  subscription: Subscription = new Subscription();
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  habilitaGuardar: boolean = true;

  constructor(
    private router: Router,
    private customerService: CustomersService,
    private _snackBar: MatSnackBar,
  ) { }

  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    age: new FormControl(null, [Validators.required, Validators.maxLength(3), Validators.minLength(1), Validators.pattern('[0-9]*')]),
    city: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
  });

  ngOnInit(): void {
    this.startEdition()
    this.changesSubscriptions();
  }

  startEdition() {
    this.customerForm.controls['id'].setValue(this.data.id);
    this.customerForm.controls['name'].setValue(this.data.name);
    this.customerForm.controls['age'].setValue(this.data.age);
    this.customerForm.controls['city'].setValue(this.data.city);
  }

  changesSubscriptions() {
    this.idSubscribe();
    this.nameSubscribe();
    this.ageSubscribe();
    this.citySubscribe();
  }

  idSubscribe() {
    this.subscription.add(
      this.customerForm.controls['id'].valueChanges.subscribe((data) => {
        let dataInput = data.trim();
        if (this.data.id.toString() == dataInput || dataInput === null || dataInput == '') {
          this.habilitaGuardar = true;
        } else this.habilitaGuardar = false;
      })
    );
  }

  nameSubscribe() {
    this.subscription.add(
      this.customerForm.controls['name'].valueChanges.subscribe((data) => {
        let dataInput = data.trim();
        if (this.data.name == dataInput || dataInput == null || dataInput == '') {
          this.habilitaGuardar = true
        } else this.habilitaGuardar = false;
      })
    );
  }

  ageSubscribe() {
    this.subscription.add(
      this.customerForm.controls['age'].valueChanges.subscribe((data) => {
        let dataInput = data.trim();
        if (this.data.age.toString() == dataInput || dataInput === null || dataInput == 0 || dataInput == '') {
          this.habilitaGuardar = true;
        } else this.habilitaGuardar = false;
      })
    );
  }

  citySubscribe() {
    this.subscription.add(
      this.customerForm.controls['city'].valueChanges.subscribe((data) => {
        let dataInput = data.trim();
        if (this.data.city == dataInput || dataInput == null || dataInput == '') {
          this.habilitaGuardar = true;
        } else this.habilitaGuardar = false;
      })
    );
  }

  back() {
    this.router.navigate([`/customer-list`]);
  }

  saveChanges() {
    let body: any = this.customerForm.getRawValue();
    this.subscription.add(
      this.customerService.customerEdit(this.data['id'], body).subscribe((res) => {
        if (res.status) {
          this.router.navigate([`/customer-list`]);
          this.showSuccesMessage('Cliente ' + `${this.data.name}` + ' atualizado com sucesso!');
        } else {
          this.showSuccesMessage('Desculpe, ha habido un error, nao se salvou a edicao');
        };
      }
      )
    );
  }

  showSuccesMessage(message: string) {
    this.openSnackBar(message);
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, { duration: 5 * 1000, });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}