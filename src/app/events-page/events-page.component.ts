import { Component, inject } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [EventComponent],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
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
