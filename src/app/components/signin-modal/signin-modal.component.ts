import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgchessInputTextComponent } from '../ngchess-components/ngchess-input-text/ngchess-input-text.component';
import { NgchessButtonComponent } from '../ngchess-components/ngchess-button/ngchess-button.component';

@Component({
  selector: 'app-signin-modal',
  standalone: true,
  templateUrl: './signin-modal.component.html',
  imports: [CommonModule, ReactiveFormsModule, NgchessInputTextComponent, NgchessButtonComponent],
})
export class SigninModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  close(): void {
    this.closeModal.emit();
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      // TODO: Implement authentication logic
      console.log('Form submitted:', this.signInForm.value);
    }
  }

  goToSignUp(): void {
    this.close();
    this.router.navigate(['/signup']);
  }
}
