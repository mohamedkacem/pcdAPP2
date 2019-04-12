import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms'
import { ChatService } from '../chat.service';
@NgModule({
  declarations: [ChatComponent],
  imports: [ 
    FormsModule,
    CommonModule
  ],
  providers:[ChatService],
  exports: [ChatComponent]
})
export class ChatModule { }
