import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Shipping } from '../interfaces/shipping.interface';

@Component({
  selector: 'topcrop-shipping-table',
  templateUrl: './shipping-table.component.html',
  styleUrls: ['./shipping-table.component.less']
})
export class ShippingTableComponent implements OnInit {
  formArray: FormArray;

  @Input() formGroup: FormGroup;
  @Output() shippingUpdated: EventEmitter<Shipping[]> = new EventEmitter();

  constructor() { }

  get shippings(): FormArray {
    return this.formGroup.get('shippings') as FormArray;
  }

  ngOnInit(): void {
    this.formArray = new FormArray([]);
    this.formGroup.addControl('shippings', this.formArray);
    this.addRow();

    this.formArray.valueChanges.subscribe(
      () => {
        this.emitShippingUpdated();
      }
    );
  }

  addRow(): void {
    this.formArray.push(new FormGroup({
      consignee: new FormControl(null),
      shipper: new FormControl(null),
      thirdPartyBillingInfo: new FormControl(null)
    }));
  }

  removeRow(rowIndex: number): void {
    this.formArray.removeAt(rowIndex);
  }

  getCurrentShippings(): Shipping[] {
    const currentShippings: Shipping[] = [];

    this.formArray.controls.forEach(
      (formGroup: FormGroup) => {
        currentShippings.push(
          {
            consignee: formGroup.get('consignee').value,
            shipper: formGroup.get('shipper').value,
            thirdPartyBillingInfo: formGroup.get('thirdPartyBillingInfo').value
          }
        );
      }
    );

    return currentShippings;
  }

  emitShippingUpdated(): void {
    this.shippingUpdated.emit(this.getCurrentShippings());
  }

}
