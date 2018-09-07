// friend.component.ts 파일

// Component 데코레이터 import
import {Component, Input} from '@angular/core';

@Component({
	selector:'friend-list',
	templateUrl: './friend.component.html'
})
export class FriendComponent{
	// root component 로 부터 입력 받기
	@Input('myFriends')
	friends:Array<string>;
	
	// 친구 이름을 삭제하는 메소드
	delFriend(i){
		this.friends.splice(i,1);
	}	
}