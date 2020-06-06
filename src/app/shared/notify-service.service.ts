import { Injectable } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;

@Injectable({
  providedIn: 'root'
})
export class NotifyServiceService {

  constructor() { }


  errorMessageByString(msg: string) {
    if (msg) {
      jQuery.notify(msg, {
        className: 'error',
        clickToHide: true,
        autoHide: true,
      });
    }
  }

  infoMessage(msg: string) {
    if (msg) {
      jQuery.notify(msg, {
        className: 'info',
        clickToHide: true,
        autoHide: true,
      });
    }
  }

  warningMessage(msg: string) {
    if (msg) {
      jQuery.notify(msg, {
        className: 'warning',
        clickToHide: true,
        autoHide: true,
      });
    }
  }

  message(msg: string) {
    if (msg) {
      jQuery.notify(msg, {
        className: 'success',
        clickToHide: true,
        autoHide: true,
      });
    }
  }
}
