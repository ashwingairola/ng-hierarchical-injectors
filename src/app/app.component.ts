import { Component } from '@angular/core';
import { AnimalService } from './animal.service';
import { FlowerService } from './flower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }],
})
export class AppComponent {
  constructor(public flower: FlowerService, public animal: AnimalService) {}
}
