import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly isMenuOpen = signal<boolean>(false);

  onOpenClicked() {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
  }

  onBackdropClicked() {
    this.isMenuOpen.set(false);
  }
}
