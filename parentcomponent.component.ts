import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  template: `
    Message: {{message}}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>`,
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent  {

  constructor() { }
  
  message:string;

  receiveMessage($event) {
    this.message = $event
  }

  

}

  

  