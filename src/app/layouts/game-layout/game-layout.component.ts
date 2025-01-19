import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-layout',
  standalone: true,
  templateUrl: './game-layout.component.html',
  imports: [RouterOutlet, RouterLink, CommonModule]
})
export class GameLayoutComponent {
  onResign(): void {
    console.log('Player resigned');
  }
}
