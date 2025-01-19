import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgchessButtonComponent } from '../../components/ngchess-components/ngchess-button/ngchess-button.component';

@Component({
  selector: 'app-game-layout',
  standalone: true,
  templateUrl: './game-layout.component.html',
  imports: [RouterOutlet, RouterLink, CommonModule, NgchessButtonComponent]
})
export class GameLayoutComponent {
  onResign(): void {
    console.log('Player resigned');
  }
}
