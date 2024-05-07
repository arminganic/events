import { Injectable, computed, signal } from '@angular/core';
import { EventDto } from '../dtos/event.dto';

@Injectable({ providedIn: 'root' })
export class EventService {
  events = signal<EventDto[]>([
    { name: 'CES', location: 'Las Vegas Convention Center', date: new Date() },
    { name: 'WWDC', location: 'Apple Park', date: new Date() },
    {
      name: 'Google I/O',
      location: 'Shoreline Amphitheatre',
      date: new Date(),
    },
    { name: 'Samsung Unpacked', location: 'San Jose', date: new Date() },
  ]);

  getEvents() {
    return computed(() => this.events());
  }
}
