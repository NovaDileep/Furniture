import { TestBed } from '@angular/core/testing';

import { OldlistService } from './oldlist.service';

describe('OldlistService', () => {
  let service: OldlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
