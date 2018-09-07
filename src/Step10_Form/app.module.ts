import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngModel을 사용하기 위해
import {FormsModule} from '@angular/forms';

import {LoginFormComponent} from './login-form.component';
import {SignupFormComponent} from './signup-form.component';



@NgModule({
  declarations: [
    AppComponent, LoginFormComponent, SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 		//ngModel을 사용하기 위해
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
