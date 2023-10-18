import { Directive, ElementRef, OnInit } from '@angular/core';
import { CesiumEngineService } from './cesium-engine.service';

@Directive({
  selector: '[appCesium]',
  standalone: true
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef, private cesiumEngine: CesiumEngineService) { }

  ngOnInit(): void {
    this.cesiumEngine.initializePrithvi(this.el.nativeElement);
  }

}
