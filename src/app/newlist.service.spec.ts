import { TestBed } from '@angular/core/testing';

import { NewlistService } from './newlist.service';

describe('NewlistService', () => {
  let service: NewlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
