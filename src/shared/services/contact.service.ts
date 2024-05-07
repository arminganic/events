import { computed, inject, signal } from '@angular/core';
import { ContactDto } from '../dtos/contact.dto';
import { EventService } from './event.service';

export class ContactService {
  private readonly eventService = inject(EventService);

  private readonly contacts = signal<ContactDto[]>([
    {
      id: '1',
      email: 'max.mustermann@mail.at',
      firstname: 'Max',
      lastname: 'Mustermann',
      event: this.eventService.getEventById('1')(),
    },
  ]);

  getContacts() {
    return computed(() => this.contacts());
  }
}
