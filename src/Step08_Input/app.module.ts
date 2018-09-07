import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngModel을 사용하기 위해
import {FormsModule} from '@angular/forms';


// 친구 목록을 출력하는 컴포넌트
import {FriendComponent} from './friend.component';


@NgModule({
  declarations: [
    AppComponent, FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 		//ngModel을 사용하기 위해
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
