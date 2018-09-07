// singup-form.component.ts
import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'signup-form',
	templateUrl: './signup-form.component.html'
})
export class SignupFormComponent{
	@Output('signupSuccess')
	successEmitter=new EventEmitter();

	// 폼에 입력한 내용을 저장할 필드
	model={id:"",pwd:"",email:""};

	onSubmit(myForm){
		alert(myForm.value.id + " 님 가입되었습니다.");

		console.log(myForm.value);

		// 이벤트 발생 시키기
		this.successEmitter.emit();
	}
}
