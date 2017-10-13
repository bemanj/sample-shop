import { TestBed, inject } from '@angular/core/testing';

import { SalesOrderdetailsService } from './sales-orderdetails.service';

describe('SalesOrderdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesOrderdetailsService]
    });
  });

  it('should be created', inject([SalesOrderdetailsService], (service: SalesOrderdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
