import { Component, Input, computed, input } from '@angular/core';
import { ReplaySubject, map } from 'rxjs';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  public event = input.required<Event>();
  protected eventName = computed(() => this.event().name);
}

interface Event {
  name: string;
}
