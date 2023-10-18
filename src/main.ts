import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Camera, Ion, Rectangle } from 'cesium';
(window as any)['CESIUM_BASE_URL'] = '/assets/cesium/';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjY2MjFkZC01ZmFmLTQyNTMtYmVmOS01YTY0NzhlNWFmMGEiLCJpZCI6MTY3NjcsImlhdCI6MTY5NjExMjM0Nn0.GAle6n-oi-eKMlebXLC0SquIMICLsMubzkxXqEmlcEI';

const extent = Rectangle.fromDegrees(68.11666667, 8.06666667, 97.41666667, 36.11666667);

Camera.DEFAULT_VIEW_RECTANGLE = extent;
Camera.DEFAULT_VIEW_FACTOR = 1;

bootstrapApplication(AppComponent, appConfig)
  // platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
