import { TestBed } from '@angular/core/testing';

import { CesiumEngineService } from './cesium-engine.service';

describe('CesiumEngineService', () => {
  let service: CesiumEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesiumEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
