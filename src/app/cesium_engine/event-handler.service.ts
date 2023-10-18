import { Injectable } from '@angular/core';
import { Cartesian2, ScreenSpaceEventHandler, ScreenSpaceEventType } from 'cesium';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  private _handler?: ScreenSpaceEventHandler;

  constructor() { }

  public instantiate(canvas: HTMLCanvasElement) {
    this._handler = new ScreenSpaceEventHandler(canvas);
  }

  public addLeftClickListener() {
    const subject = new Subject<Cartesian2>();
    this._handler?.setInputAction((ev: ScreenSpaceEventHandler.PositionedEvent) => {
      subject.next(ev.position);
    }, ScreenSpaceEventType.LEFT_CLICK);

    return {
      dataStream: subject.asObservable(),
      remove: () => {
        this._handler?.removeInputAction(ScreenSpaceEventType.LEFT_CLICK);
        subject.complete();
      }
    }
  }
}
