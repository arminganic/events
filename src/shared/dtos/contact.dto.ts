import { SimpleEventDto } from './event.dto';

export interface ContactDto {
  id: string;
  event: SimpleEventDto;
  email: string;
  firstname: string;
  lastname: string;
}
