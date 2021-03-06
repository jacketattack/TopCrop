import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Shipping } from '../interfaces/shipping.interface';

@Component({
  selector: 'topcrop-bill-of-lading',
  templateUrl: './bill-of-lading.component.html',
  styleUrls: ['./bill-of-lading.component.less']
})
export class BillOfLadingComponent implements OnInit {
  formGroup: FormGroup;
  shippings: Shipping[] = [];
  specialCarrierRoutingControl: FormControl;
  poNumberRoutingControl: FormControl;
  shippingUnitsControl: FormControl;

  hazardousMaterialControl: FormControl;
  descriptionControl: FormControl;
  nmfcNumberControl: FormControl;
  weightControl: FormControl;
  classControl: FormControl;

  fedexAccountNumberControl: FormControl;
  quoteNumberControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.specialCarrierRoutingControl = fb.control(null);
    this.poNumberRoutingControl = fb.control(null);

    this.shippingUnitsControl = fb.control(null);
    this.hazardousMaterialControl = fb.control(false);
    this.descriptionControl = fb.control(null);
    this.nmfcNumberControl = fb.control(null);
    this.weightControl = fb.control(null);
    this.classControl = fb.control(null);

    this.fedexAccountNumberControl = fb.control(null);
    this.quoteNumberControl = fb.control(null);
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      specialCarrierRouting: this.specialCarrierRoutingControl,
      poNumberRouting: this.poNumberRoutingControl,
      shippingUnits: this.shippingUnitsControl,
      hazardousMaterial: this.hazardousMaterialControl,
      description: this.descriptionControl,
      nmfcNumber: this.nmfcNumberControl,
      weight: this.weightControl,
      class: this.classControl,
      fedexAccountNumber: this.fedexAccountNumberControl,
      quoteNumber: this.quoteNumberControl
    });

    this.formGroup.valueChanges.subscribe(
      () => {
        console.log(this.formGroup);
      }
    );
  }

  updateShipping(updatedShippings: Shipping[]): void {
    this.shippings = updatedShippings;
  }

}
