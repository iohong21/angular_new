import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {	// 컨트롤러이다
	// 친구 이름이 저장된 배열
	friends:Array<string>=['김구라','해골','원숭이'];

}
