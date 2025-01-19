import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngchess-button',
  standalone: true,
  templateUrl: './ngchess-button.component.html',
  styleUrls: ['./ngchess-button.component.scss'],
  imports: [RouterLink]
})
export class NgchessButtonComponent {
  @Input() routerLink?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClass(): string {
    const baseClasses = 'px-6 py-3 rounded-lg transition-colors duration-200 font-semibold';
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    };
    return `${baseClasses} ${variantClasses[this.variant]}`;
  }
}
