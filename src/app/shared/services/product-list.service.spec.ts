import { ProductListService } from './product-list.service';
import { TestBed, inject } from '@angular/core/testing';

describe('ProductListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductListService]
    });
  });

  it('should be created', inject([ProductListService], (service: ProductListService) => {
    expect(service).toBeTruthy();
  }));
});
