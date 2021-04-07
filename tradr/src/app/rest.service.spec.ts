import { async, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestService } from './rest.service';

import { StockSearchResult } from './models/stockSearchResult.model';
import { StockSearchResults } from './models/stockSearchResults.model';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));
  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
