import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events',
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./events-page/events-page.component').then(
        (c) => c.EventsPageComponent
      ),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./event-page/event-page.component').then(
        (c) => c.EventPageComponent
      ),
  },
];
