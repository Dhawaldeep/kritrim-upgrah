import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumDirective } from './cesium.directive';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CesiumDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kritrim Upgrah';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
