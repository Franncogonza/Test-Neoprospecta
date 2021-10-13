import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-edit-customer-modal',
  templateUrl: './edit-customer-modal.component.html',
  styleUrls: ['./edit-customer-modal.component.scss']
})
export class EditCustomerModalComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  habilitaGuardar: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<EditCustomerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private customerService: CustomersService
    ) { }

  customerForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    age: new FormControl(this.data.age, [Validators.required, Validators.maxLength(3), Validators.minLength(1), Validators.pattern('[0-9]*')]),
    city: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.inicioEdicionEstablecimiento()
    this.subscribirseACambios();
  }

  inicioEdicionEstablecimiento() {
    this.customerForm.controls['id'].setValue(this.data.id);
    this.customerForm.controls['name'].setValue(this.data.name);
    // this.customerForm.controls['age'].setValue(this.data.age);
    this.customerForm.controls['city'].setValue(this.data.city);
  }

  subscribirseACambios() {
    this.idSubscribe();
    this.nameSubscribe();
    this.ageSubscribe();
    this.citySubscribe();
  }

  idSubscribe() {
    this.subscription.add(
      this.customerForm.controls['id'].valueChanges.subscribe((data) => {
        if (this.data.id.toString() !== data && data !== null && data !== 0 && data !== '' && data !== '0') {
          this.habilitaGuardar = false;
        } else this.habilitaGuardar = true;
      })
    );
  }

  nameSubscribe() {
    this.subscription.add(
      this.customerForm.controls['name'].valueChanges.subscribe((data) => {
        if (this.data.name !== data && data !== null && data !== '') {
          this.habilitaGuardar = false;
        } else this.habilitaGuardar = true;
      })
    );
  }

  ageSubscribe() {
    this.subscription.add(
      this.customerForm.controls['age'].valueChanges.subscribe((data) => {
        if (this.data.age.toString() !== data && data !== null && data !== 0 && data !== '' && data !== '0') {
          this.habilitaGuardar = false;
        } else this.habilitaGuardar = true;
      })
    );
  }

  citySubscribe() {
    this.subscription.add(
      this.customerForm.controls['city'].valueChanges.subscribe((data) => {
        if (this.data.city !== data && data !== null && data && data !== '') {
          this.habilitaGuardar = false;
        } else this.habilitaGuardar = true;
      })
    );
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action);
  }

  cancelarClick(): void {
    if (
      this.data.id !== this.customerForm.controls['id'].value ||
      this.data.name !== this.customerForm.controls['name'].value ||
      this.data.age !== this.customerForm.controls['age'].value ||
      this.data.city !== this.customerForm.controls['city'].value
    ) {
      // this.abrirDescartarCambio();
      alert('descartar cambios<<??')
    } else {
      this.dialogRef.close(null);
    }
  }

  showSuccesMessage(message: string) {
    this.dialogRef.close('salvar');
    this.openSnackBar(message);
  }

  saveChanges() {
    let body: any = this.customerForm.getRawValue();
    this.subscription.add(
      this.customerService.customerEdit(this.data['id'], body).subscribe(
        (data) => {
          console.log(data, 'despes de guardar')
          // this.clientEstablecimientoService.cargaInicialEstablecimientos();
          this.showSuccesMessage('Cliente ' + `${this.data.name}` + ' atualizado com sucesso!');
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
