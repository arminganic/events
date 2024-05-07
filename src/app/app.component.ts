import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly eventService = inject(EventService);

  protected readonly events = this.eventService.getEvents();
}
