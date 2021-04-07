import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { CONFIGS } from './config'

import { StockSearchResult, STOCKSEARCHRESULTMOCK } from './models/stockSearchResult.model';
import { StockSearchResults, STOCKSEARCHRESULTSMOCK } from './models/stockSearchResults.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

	config;

  constructor(private http: HttpClient) {
  	let currentDomain = window.location.href;

    if(currentDomain.includes('localhost')){
      this.config = CONFIGS.localhost;      
    } else {
      this.config = CONFIGS.prod;      
    }  	
  }

  /**
  * Get quote - Payload is different for single quotes
  *
  * @param searchString string stock search string
  * @return object observable payload data
  */
  getQuote(searchString: string): Observable<StockSearchResult> { 
    if(this.config.mockData === true) {
      return of (STOCKSEARCHRESULTMOCK);
    } else {
      return this.http.get<any>(this.config.API_URL + 'markets/quotes');
    }
  }

  /**
  * Get quotes - Payload is different for multi quotes
  *
  * @param searchString string stock search string
  * @return object observable payload data
  */
  getQuotes(searchString: string): Observable<StockSearchResults> { 
    if(this.config.mockData === true) {
console.log(STOCKSEARCHRESULTSMOCK)    	
      return of (STOCKSEARCHRESULTSMOCK);
    } else {
      return this.http.get<any>(this.config.API_URL + 'markets/quotes');
    }
  }

}
