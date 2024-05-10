import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'app-event-page',
  standalone: true,
  imports: [],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css',
})
export class EventPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly eventService = inject(EventService);

  private readonly paramMap = toSignal(this.activatedRoute.paramMap);

  private readonly id = computed(() => this.paramMap()?.get('id') ?? undefined);
  protected readonly event = computed(() => {
    const id = this.id();
    if (!id) {
      return undefined;
    }
    return this.eventService.getEventById(id)();
  });
}
