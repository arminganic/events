import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventService } from '../shared/services/event.service';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly eventService = inject(EventService);

  protected readonly events = this.eventService.getSimpleEvents();

  onAddEventClicked() {
    this.eventService.addEvent({
      id: '-1',
      contacts: [],
      date: new Date(),
      location: 'Las Testas',
      name: 'Test',
    });
  }
}
