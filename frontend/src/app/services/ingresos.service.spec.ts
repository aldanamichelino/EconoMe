import { TestBed } from '@angular/core/testing';

import { IngresosService } from './ingresos.service';

describe('IngresosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngresosService = TestBed.get(IngresosService);
    expect(service).toBeTruthy();
  });
});
