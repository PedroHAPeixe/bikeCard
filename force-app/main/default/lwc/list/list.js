import { LightningElement } from 'lwc';
import { bikes } from 'c/data';  // IMPORT CORRETO: c/data e não c:data/data

export default class List extends LightningElement {
  bikes = bikes;

  handleTileClick(event) {
    const selectedBikeId = event.detail;
    this.dispatchEvent(new CustomEvent('productselected', { detail: selectedBikeId }));
  }
}

// Make sure that any usage of <c-detail> in your list.html file is correct and that the 'detail' component exists in your project.
