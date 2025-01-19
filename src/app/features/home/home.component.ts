import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgchessButtonComponent } from '../../components/ngchess-components/ngchess-button/ngchess-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgchessButtonComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
