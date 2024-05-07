import { Injectable, computed, signal } from '@angular/core';
import { EventDto } from '../dtos/event.dto';

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly events = signal<EventDto[]>([
    {
      id: '1',
      name: 'CES',
      location: 'Las Vegas Convention Center',
      date: new Date(),
      contacts: 5,
    },
    {
      id: '2',
      name: 'WWDC',
      location: 'Apple Park',
      date: new Date(),
      contacts: 5,
    },
    {
      id: '3',
      name: 'Google I/O',
      location: 'Shoreline Amphitheatre',
      date: new Date(),
      contacts: 5,
    },
    {
      id: '4',
      name: 'Samsung Unpacked',
      location: 'San Jose',
      date: new Date(),
      contacts: 5,
    },
  ]);

  getEvents() {
    return computed(() => this.events());
  }

  getEventById(id: string) {
    return computed(() => {
      const event = this.events().find((event) => event.id === id);
      if (!event) {
        throw 'Event not found';
      }
      return event;
    });
  }
}
