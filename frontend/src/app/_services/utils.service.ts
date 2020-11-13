import { Injectable } from '@angular/core';
declare var M: any;

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  handleSuccess(message) {
    M.toast({ html: message, classes: 'success', errorFlag: 0 });
  }
  handleError(message) {
    M.toast({ html: message, classes: 'error', errorFlag: 1 });
  }
}
