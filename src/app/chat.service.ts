import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root' 
})
  
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
export class ChatService {
     readonly token = environment.DialogFlow.AngularBot;
     readonly client = new ApiAiClient({accessToken:this.token});

     converstation = new BehaviorSubject<Message[]>([]);
  constructor() { }

/*talk() {
  this.client.textRequest('who are you!')
  .then(res => console.log(res));
}*/

update(msg:Message) { 
  this.converstation.next([msg]);
}

converse(msg: string) {
  const userMessage = new Message(msg,'user');
  this.update(userMessage);

  return this.client.textRequest(msg)
  .then(res =>{
    const speech = res.result.fulfillment.speech;
    const  botMessage = new Message(speech,'bot');
    this.update(botMessage);
  });
}

}
