import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  newMessage: Partial<Message> = {
    sender: '',
    receiver: '',
    content: '',
    replyTo: '',
  };
  search: string = '';
  page: number = 1;
  limit: number = 5;
  total: number = 0;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getAll(this.page, this.limit, this.search).subscribe((res: any) => {
      this.messages = res.messages;
      this.total = res.total;
    });
  }

  sendMessage() {
    this.messageService.create(this.newMessage).subscribe(() => {
      this.newMessage = { sender: '', receiver: '', content: '', replyTo: '' };
      this.loadMessages();
    });
  }

  deleteMessage(id: string) {
    this.messageService.delete(id).subscribe(() => this.loadMessages());
  }

  nextPage() {
    this.page++;
    this.loadMessages();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadMessages();
    }
  }
}
