import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { SimpleEventDto } from '../../shared/dtos/event.dto';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  public readonly event = input.required<SimpleEventDto>();

  protected readonly name = computed(() => this.event().name);
  protected readonly location = computed(() => this.event().location);
  protected readonly date = computed(() => this.event().date);
  protected readonly contacts = computed(() => this.event().contacts);
}
