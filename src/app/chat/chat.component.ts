import { Component, OnInit } from '@angular/core';
import { ChatService,Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  messages: Observable<Message[]>;
  formValue: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
     //this.chat.talk();
     this.messages = this.chat.converstation.asObservable()
     .scan((acc,val) => acc.concat(val));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
  }

}
