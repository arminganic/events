import { Injectable, computed, inject } from '@angular/core';
import { EventDto } from '../dtos/event.dto';
import { EventRepository } from '../repositories/event.repository';

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly eventRepository = inject(EventRepository);

  getSimpleEvents() {
    return this.eventRepository.simpleEvents;
  }

  getEventById(id: string) {
    return computed(() => {
      const event = this.eventRepository
        .events()
        .find((event) => event.id === id);
      if (!event) {
        throw 'Event not found';
      }
      return event;
    });
  }

  addEvent(event: EventDto) {
    this.eventRepository.addEvent(event);
  }
}
