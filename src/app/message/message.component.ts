import { Component } from '@angular/core';
import { MessageService } from '../Services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: string = '';
  response: string = '';

  constructor(
    private messageService: MessageService
    ) {}

  async send() {
    try {
      this.messageService.sendMessage(this.message).subscribe({
        next: (res) => {
          this.response = res;
          this.message = '';
        },
        error: (err) => {
          this.response = 'Error: ' + err.message;
        }
      });
    } catch (error) {
      this.response = 'Failed to get token';
    }
  }
}