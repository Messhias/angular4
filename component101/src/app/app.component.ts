import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  	<h1 [class]='classTitle'>{{myObject.location}}</h1>
  	<ul>
  		<li *ngIf='myArr'>Yeah, I exist.</li>
  		<li *ngFor='let arr of myArr'>{{arr}}</li>
  	</ul>
  `,
  // styleUrls: ['./app.component.css']
  styles:[`
  	.red-title{
  		color: red
  	}
  `
  ]
})
export class AppComponent {
  myObject = {
  	gender: 'male',
  	age: 27,
  	location: 'USA'
  }

  classTitle = 'red-title';

  myArr  = ['him','hers','yours'];
}
