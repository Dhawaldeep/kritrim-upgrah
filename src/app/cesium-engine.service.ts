import { Injectable } from '@angular/core';
import { Viewer } from 'cesium';
import { EventHandlerService } from './cesium_engine/event-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CesiumEngineService {
  private _viewer?: Viewer;

  constructor(private eventHandlerService: EventHandlerService) { }

  public initializePrithvi(el: HTMLElement) {
    this._viewer = new Viewer(el);
    this.eventHandlerService.instantiate(this._viewer.canvas);

    this.eventHandlerService.addLeftClickListener().dataStream.subscribe(data => {
      console.log('EVENT', data.x, data.y);
      console.log('camera', this._viewer?.camera);
    });
  }
}