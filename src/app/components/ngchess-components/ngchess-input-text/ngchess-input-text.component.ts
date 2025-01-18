import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngchess-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="relative">
      <input 
        [type]="type"
        [id]="id"
        [(ngModel)]="value"
        (ngModelChange)="onValueChange($event)"
        [placeholder]="placeholder"
        class="w-full px-4 py-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
        [class.border-red-500]="error"
      >
      <p *ngIf="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    </div>
  `
})
export class NgchessInputTextComponent {
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() error: string = '';
  @Input() value: string = '';

  onValueChange(newValue: string) {
    this.value = newValue;
  }
}
