import { Component, OnInit } from '@angular/core';
import { MessagesServiceService } from '../messages-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class ContentMessageComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesServiceService) {}

  ngOnInit(): void {
    this.messagesService.messages$.subscribe((message) => {
      this.messages.push(message);
    })
  }
}
