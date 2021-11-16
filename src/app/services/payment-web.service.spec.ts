import { TestBed } from '@angular/core/testing';

import { PaymentWebService } from './payment-web.service';

describe('PaymentWebService', () => {
  let service: PaymentWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
