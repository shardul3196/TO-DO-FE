import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApiConstants } from './shared/app-constant';
import { NotifyServiceService } from './shared/notify-service.service';
import { RequestsService } from './shared/requests.service';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './shared/auth-guard.service';



export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:9081'],
        blacklistedRoutes: [
          'http://localhost:9081/to-do/v1/login',
          'http://localhost:9081/to-do/v1/sign-up'
        ],
      },
    })
  ],
  providers: [RequestsService, ApiConstants, NotifyServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
