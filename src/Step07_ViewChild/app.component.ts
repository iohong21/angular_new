import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {	// 컨트롤러이다
	/*
		컨트롤러가 제어하고 있는 view 에서 #five 혹은 ref-five 
		되어있는 요소의 참조값을 ElementRef type 으로 받기
	*/

	@ViewChild('five') fiveInput:ElementRef;


	// four 버튼을 클릭했을때 호출되는 메소드
	fourClicked(elem){
		// elem => #four 된 문서 객체의 참조값
		elem.value = "four";
	}


	// five 버튼을 클릭했을때 호출되는 메소드
	fiveClicked(){
		this.fiveInput.nativeElement.value = "five";
	}
}
