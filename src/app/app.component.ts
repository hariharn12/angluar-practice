import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddBoxComponent } from './add-box/add-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, AddBoxComponent, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angluar-practice';
  // boxes: any[] = ['red','yellow','b']
  boxes:any[]=[0,1,2,3,4]
  addbox() {
    this.boxes.push(1)
  }
  removebutton() {
    this.boxes.splice(0,4)
    this.boxes.pop()
   
    
  }
}
