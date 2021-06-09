import { TestBed } from '@angular/core/testing';

import { GeneroSerieService } from './genero-serie.service';

describe('GeneroSerieService', () => {
  let service: GeneroSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
