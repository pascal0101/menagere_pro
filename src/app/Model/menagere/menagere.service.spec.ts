import { TestBed } from '@angular/core/testing';

import { MenagereService } from './menagere.service';

describe('MenagereService', () => {
  let service: MenagereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenagereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
