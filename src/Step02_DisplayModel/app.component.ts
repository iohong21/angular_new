import { Component } from '@angular/core';
//Member class import
import {Member} from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //컨트롤러이다. 
	//다양한 모델의 type 
	title:string="AngularJs"; 
	friends:string[]=['김구라','해골','원숭이'];
	person:object={num:1, name:'김구라', addr:'노량진'};
	member:Member=new Member(2,'해골','행신동');
	members:Array<Member>=[
		new Member(1,'김구라','노량진'),
		new Member(2,'해골','행신동'),
		new Member(3,'원숭이','상도동')
	];
}
