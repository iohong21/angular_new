import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>안녕
  	<strong>{{myName}}</strong>
  </h1>
  <p>오늘의 운세: {{fortuneToday}}</p>
  <h3>양방향 바인딩</h3>
  <input type="text" (input)="msg=$event.target.value" 
    [value]="msg" />
  <p>{{msg}}</p>
  <input type="text" (input)="msg=$event.target.value" />

  <h3>양방향 바인딩 테스트2</h3>
  <input type="text" [(ngModel)]="msg2" />
  <p>{{msg2}}</p>
  <input type="text" (input)="msg2=$event.target.value" />
  `
})
export class AppComponent {	// 컨트롤러이다
	msg="";
	myName="김구라";
	fortuneToday="동쪽으로 가면 귀인을 만나요";
}
