import { ContactDto } from './contact.dto';

export interface EventDto {
  id: string;
  contacts: ContactDto[];
  date: Date;
  location: string;
  name: string;
}

export interface SimpleEventDto {
  id: string;
  contacts: number;
  date: Date;
  location: string;
  name: string;
}
