import { TestBed } from '@angular/core/testing';

import { CommonDataPipeService } from './common-data-pipe.service';

describe('CommonDataPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonDataPipeService = TestBed.get(CommonDataPipeService);
    expect(service).toBeTruthy();
  });
});
