import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-child',
  template: `
             <h2>Input<h2><input type="text">
            <button (click)="event()">click</button>
            <h2>{{"welcome to"+parentData}}</h2>

      `,
    
    
  styles: []
})
export class ChildComponent implements OnInit {

  

 @Input() public parentData;
 @Output() public childevent=new EventEmitter();

  constructor() { }
ngOnInit()
{

}
event()
{
  this.childevent.emit("hello");
}
   }
  