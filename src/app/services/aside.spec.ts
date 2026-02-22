import { TestBed } from '@angular/core/testing';

import { Aside } from './aside';

describe('Aside', () => {
  let service: Aside;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aside);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
