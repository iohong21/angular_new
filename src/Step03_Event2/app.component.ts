import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-study';
  msgs:string[] = [];
  sendClick(e) {
  	this.msgs.push(e.value);
  	e.value="";
  	e.focus();
  }
  sendInput(e) {
  	// e 는 event 객체 이다.
  	console.log(e);
  	if(e.keyCode == 13) {
  		let elem = e.target;	// 이벤트가 일어난 요소의 참조값
  		this.msgs.push(elem.value);
  		elem.value = "";
  	}
  }
}
