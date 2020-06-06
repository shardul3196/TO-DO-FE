import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../shared/requests.service';
import { ApiConstants } from '../shared/app-constant';
import { NotifyServiceService } from '../shared/notify-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(
    private requests: RequestsService,
    private apiConstants: ApiConstants,
    private notifyService: NotifyServiceService,
    private route: Router
  ) { }

  ngOnInit() {

    if (localStorage.getItem('token')) {
      this.route.navigateByUrl('/core');
    }
  }

  submit() {
    if (this.userName == null || this.userName.trim() === '' ||
      this.password == null || this.password.trim() === '') {
      this.notifyService.errorMessageByString('Username/ or Password cannot be empty.');
      return false;
    }

    const payLoad = {
      userName: this.userName,
      password: this.password
    };

    this.requests.postData(this.apiConstants.LOGIN, payLoad).subscribe(data => {
      if (data.responseStatus === 'SUCCESS') {
        this.notifyService.message('Login Success.');
        const response = data.response;
        localStorage.setItem('contact', response.contact);
        localStorage.setItem('email', response.email);
        localStorage.setItem('id', response.id);
        localStorage.setItem('name', response.name);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userName', response.userName);
        this.route.navigateByUrl('/core');
      } else {
        this.notifyService.errorMessageByString('Please check your credentials.');
      }
    }, error => {
      this.notifyService.errorMessageByString('Some error occurred');
    });

  }

}
