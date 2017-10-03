import { TestBed, inject } from '@angular/core/testing';

import { InventoryListService } from './inventory-list.service';

describe('InventoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryListService]
    });
  });

  it('should be created', inject([InventoryListService], (service: InventoryListService) => {
    expect(service).toBeTruthy();
  }));
});
