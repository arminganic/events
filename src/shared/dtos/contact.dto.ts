import { EventDto } from './event.dto';

export interface ContactDto {
  id: string;
  event: EventDto;
  email: string;
  firstname: string;
  lastname: string;
}
