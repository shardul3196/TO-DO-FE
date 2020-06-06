import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAlertModule, NgbPaginationModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestsService } from './shared/requests.service';
import { ApiConstants } from './shared/app-constant';
import { NotifyServiceService } from './shared/notify-service.service';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RequestsService, ApiConstants, NgbAlertConfig, NotifyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
