import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
  selectedProductId;

  userId = Id;

  @wire(getRecord, { recordId: '$userId', fields })
  user;

  handleProductSelected(evt) {
    this.selectedProductId = evt.detail;
  }

  get name() {
    return getFieldValue(this.user.data, NAME_FIELD);
  }
}
