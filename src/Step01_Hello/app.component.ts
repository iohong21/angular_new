import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //컨트롤러이다. 
  //view 에서 사용하는 모델을 필드로 정의한다. 
  title = 'AngularJS'; 
  writer='김구라';
}
