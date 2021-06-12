import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css'],
})
export class InspectorComponent implements OnInit {
  constructor(public flower: FlowerService, public animal: AnimalService) {}

  ngOnInit(): void {}
}
