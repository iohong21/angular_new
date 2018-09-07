import { Component } from '@angular/core';
//Member class import
import {Member} from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //컨트롤러이다.
	//필드(모델) 정의하기  
	clickCount:number=0;
	inputMsg='';
	msg='';
	//버튼을 눌렀을때 호출되는 메소드
	btnClicked(){
		alert("버튼을 눌렀네?");
	}
	addCount(){
		//필드의 값을 1 증가 시키기 
		this.clickCount=this.clickCount+1;
	}
	// input 요소에 key 를 눌렀다가 떼었을때 호출되는 메소드
	keyUpped(e){
		// e 는 key event 객체이다.

		// 이벤트가 일어난 요소의 value 값을 모델에 대입
		this.inputMsg=e.target.value;
	}	
}
