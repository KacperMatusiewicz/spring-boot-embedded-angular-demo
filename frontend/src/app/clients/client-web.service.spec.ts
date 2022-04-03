import { TestBed } from '@angular/core/testing';

import { ClientWebService } from './client-web.service';

describe('ClientWebService', () => {
  let service: ClientWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
