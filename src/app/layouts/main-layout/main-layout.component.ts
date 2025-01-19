import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './../../components/signin-modal/signin-modal.component';
import { NgchessButtonComponent } from '../../components/ngchess-components/ngchess-button/ngchess-button.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  imports: [RouterOutlet, RouterLink, CommonModule, SigninModalComponent, NgchessButtonComponent],
})
export class MainLayoutComponent {
  showSignInModal = false;

  openSignInModal(): void {
    this.showSignInModal = true;
  }

  closeSignInModal(): void {
    this.showSignInModal = false;
  }
}
