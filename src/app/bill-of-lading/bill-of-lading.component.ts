import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'topcrop-bill-of-lading',
  templateUrl: './bill-of-lading.component.html',
  styleUrls: ['./bill-of-lading.component.less']
})
export class BillOfLadingComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  cosigneeControl: FormControl;
  shipperControl: FormControl;
  billingInfoControl: FormControl;
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
    this.cosigneeControl = fb.control(null);
    this.shipperControl = fb.control(null);
    this.billingInfoControl = fb.control(null);

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
  }

}
