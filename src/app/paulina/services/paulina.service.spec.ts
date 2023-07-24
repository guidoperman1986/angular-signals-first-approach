import { TestBed } from '@angular/core/testing';

import { PaulinaService } from './paulina.service';

describe('PaulinaService', () => {
  let service: PaulinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaulinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
