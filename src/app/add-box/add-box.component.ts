import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-box.component.html',
  styleUrl: './add-box.component.css',
})
export class AddBoxComponent {
  @Input() color = '';
}
