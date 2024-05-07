import { DatePipe } from '@angular/common';
import {
  Component,
  HostListener,
  computed,
  inject,
  input,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SimpleEventDto } from '../../shared/dtos/event.dto';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  private readonly router = inject(Router);

  public readonly event = input.required<SimpleEventDto>();

  protected readonly id = computed(() => this.event().id);
  protected readonly name = computed(() => this.event().name);
  protected readonly location = computed(() => this.event().location);
  protected readonly date = computed(() => this.event().date);
  protected readonly contacts = computed(() => this.event().contacts);

  @HostListener('click')
  onEventClicked() {
    this.router.navigate(['events', this.event().id]);
  }
}
