import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngModel을 사용하기 위해
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 		//ngModel을 사용하기 위해
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
