import { Injectable, computed, signal } from '@angular/core';
import { EventDto, SimpleEventDto } from '../dtos/event.dto';

@Injectable({ providedIn: 'root' })
export class EventRepository {
  private readonly _events = signal<EventDto[]>([
    {
      id: '1',
      name: 'CES',
      location: 'Las Vegas Convention Center',
      date: new Date(),
      contacts: [],
    },
    {
      id: '2',
      name: 'WWDC',
      location: 'Apple Park',
      date: new Date(),
      contacts: [],
    },
    {
      id: '3',
      name: 'Google I/O',
      location: 'Shoreline Amphitheatre',
      date: new Date(),
      contacts: [],
    },
    {
      id: '4',
      name: 'Samsung Unpacked',
      location: 'San Jose',
      date: new Date(),
      contacts: [],
    },
  ]);

  private readonly _simpleEvents = computed(() =>
    this._events().map(
      (event): SimpleEventDto => ({
        id: event.id,
        contacts: event.contacts.length,
        date: event.date,
        location: event.location,
        name: event.name,
      })
    )
  );

  get events() {
    return this._events.asReadonly();
  }

  get simpleEvents() {
    return this._simpleEvents;
  }

  addEvent(event: EventDto) {
    this._events.update((events) => [...events, event]);
  }
}
