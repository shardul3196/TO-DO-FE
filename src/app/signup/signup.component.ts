import { Component, OnInit } from '@angular/core';
import { NotifyServiceService } from '../shared/notify-service.service';
import { RequestsService } from '../shared/requests.service';
import { ApiConstants } from '../shared/app-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public signUpObj = {
    name: null,
    userName: null,
    password: null,
    email: null,
    contact: null,
    createdMode: 'WEB'
  };

  constructor(
    private notifyService: NotifyServiceService,
    private request: RequestsService,
    private constant: ApiConstants
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.signUpObj.name == null || this.signUpObj.name.trim() === ''
      || this.signUpObj.userName == null || this.signUpObj.userName.trim() === ''
      || this.signUpObj.password == null || this.signUpObj.password.trim() === '') {
      this.notifyService.errorMessageByString('Username/ or Password cannot be empty.');
      return;
    }

    this.request.postData(this.constant.SIGNUP, this.signUpObj).subscribe(data => {
      if (data.responseStatus === 'SUCCESS') {
        this.notifyService.message('User registered successfully. Please proceed to login.');
      } else {
        this.notifyService.errorMessageByString('Please check your credentials.');
      }
    }, error => {
      this.notifyService.errorMessageByString('Some error occurred');
    });

  }

}
