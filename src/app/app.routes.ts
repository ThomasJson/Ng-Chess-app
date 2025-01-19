import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/game/game.component';
import { GameLayoutComponent } from './layouts/game-layout/game-layout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'game',
    component: GameLayoutComponent,
    children: [
      { path: '', component: GameComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
