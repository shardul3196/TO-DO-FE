import { TestBed } from '@angular/core/testing';

import { NotifyServiceService } from './notify-service.service';

describe('NotifyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifyServiceService = TestBed.get(NotifyServiceService);
    expect(service).toBeTruthy();
  });
});
