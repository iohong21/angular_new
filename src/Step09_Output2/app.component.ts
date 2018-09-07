import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {	// 컨트롤러이다
	members=[
		{num:1, name:"김구라", addr:"노량진"},
		{num:2, name:"해골", addr:"행신동"},
		{num:3, name:"원숭이", addr:"동물원"}
	];

	delMember(e) {
		if(confirm(e.num+" 번 회원을 삭제 하시겠습니까?")) {
			/*
			for(var i=0; i<this.members.length; i++) {
				if(this.members[i].num == e) {
					this.members.splice(i,1);
				}
			}
			*/
			this.members.splice(e.index,1);
		}
	}
}

@Component({
	selector: "member-detail",
	template:`
		<div>
			<p>번호: {{currentMem.num}}</p>
			<p>이름: {{currentMem.name}}</p>
			<p>주소: {{currentMem.addr}}</p>
			<button (click)="deleteEmit()">삭제</button>
		</div>
	`
})
export class DetailComponent{
	// 입력
	@Input('mem')
	currentMem;

	@Input('i')
	currentIndex;	

	@Output('deleteEmit')
	deleteEmiter = new EventEmitter();

	deleteEmit(){
		this.deleteEmiter.emit({'num':this.currentMem.num, 'index':this.currentIndex});
	}

}
