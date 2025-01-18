import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './../../components/signin-modal/signin-modal.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  imports: [RouterOutlet, RouterLink, CommonModule, SigninModalComponent],
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
