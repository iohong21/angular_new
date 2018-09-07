import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {	// 컨트롤러이다

	guraEmited(e){
		alert(e);
	}
}

// 테스트 할 Component
@Component({
	selector: 'my-test',
	template:`
		<h3>MyTestComponent 입니다.</h3>
		<button (click)="emitGura()">gura 이벤트 발생시키기</button>
	`
})
export class MyTestComponent{
	// 'gura' 라는 이름의 이벤트를 발생시킬 EventEmitter 정의
	@Output('gura')
	guraEmitter=new EventEmitter();

	// 버튼을 누르면 호출되는 메소드
	emitGura() {
		// 이벤트 발생시키기
		this.guraEmitter.emit("나는 구라다!");
	}
}
