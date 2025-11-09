import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../messages-service';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports: [AsyncPipe],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesList {
  private messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
