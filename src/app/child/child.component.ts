import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],
})
export class ChildComponent {
  constructor(
    @Optional() @SkipSelf() @Host() public flower: FlowerService,
    @Optional() @Host() @SkipSelf() public animal: AnimalService
  ) {}
}
