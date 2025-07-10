import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';

export default class Detail extends LightningElement {
  @api bikeId;

  get bike() {
    return bikes.find(bike => bike.id === this.bikeId);
  }
}
