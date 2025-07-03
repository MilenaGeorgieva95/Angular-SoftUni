import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  isHidden: boolean = true;
  constructor() {}

  showLoader() {
    this.isHidden = false;
  }

  hideLoader() {
    this.isHidden = true;
  }
}
