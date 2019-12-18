import { EventEmitter } from '@angular/core';

export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  activeToInactiveUpdated = new EventEmitter<number>();
  inactiveToActiveUpdated = new EventEmitter<number>();

  changeActiveToInactive() {
    this.activeToInactive++;
    this.activeToInactiveUpdated.emit(this.activeToInactive);
  }

  changeInactiveToActive() {
    this.inactiveToActive++;
    this.inactiveToActiveUpdated.emit(this.inactiveToActive);
  }
}