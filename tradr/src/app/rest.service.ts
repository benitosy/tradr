import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { ENV_CONFIGS } from './config'

import { StockSearchResult, STOCKSEARCHRESULTMOCK } from './models/stockSearchResult.model';
import { StockSearchResults, STOCKSEARCHRESULTSMOCK } from './models/stockSearchResults.model';
import { Portfolio, PORTFOLIOSMOCK } from './models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

	config;
  restDbHeaders: HttpHeaders = new HttpHeaders();
  tradierHeaders: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
  	let currentDomain = window.location.href;

    if(currentDomain.includes('localhost')){
      this.config = ENV_CONFIGS.localhost;      
    } else {
      this.config = ENV_CONFIGS.prod;      
    }  	

    this.tradierHeaders = this.tradierHeaders
    .set("Accept", "application/json")
    .set("Authorization", "Bearer "+ this.config.API_URL_KEY) //set CORS API key

    this.restDbHeaders = this.restDbHeaders
    .set("Content-Type", "application/json")
    .set("x-apikey", this.config.MY_DATA_API_URL_KEY) //set CORS API key

  }

  /**
  * Get quote - Payload is different for single quotes
  *
  * @param searchString string stock search string
  * @return object observable payload data
  */
  getQuote(searchString: string): Observable<StockSearchResult> { 
    //remove spaces
    searchString = searchString.split(' ').join('');

    if(this.config.mockData === true) {
      console.log(STOCKSEARCHRESULTMOCK)      
      return of (STOCKSEARCHRESULTMOCK);
    } else {
      return this.http.get<any>(this.config.API_URL + 'markets/quotes?symbols=' + searchString, {"headers": this.tradierHeaders});
    }
  }

  /**
  * Get quotes - Payload is different for multi quotes
  *
  * @param searchString string stock search string
  * @return object observable payload data
  */
  getQuotes(searchString: string): Observable<StockSearchResults> { 
    //remove spaces
    searchString = searchString.split(' ').join('');

    if(this.config.mockData === true) {
      console.log(STOCKSEARCHRESULTSMOCK)    	
      return of (STOCKSEARCHRESULTSMOCK);
    } else {
      return this.http.get<any>(this.config.API_URL + 'markets/quotes?symbols=' + searchString, {"headers": this.tradierHeaders});
    }
  }

  /**
  * Get Portfolio
  *
  * @param searchString string stock search string
  * @return object observable payload data
  */
  getPortfolios(): Observable<Portfolio[]> { 
    let p = "fetchchildren=true";

    if(this.config.mockData === true) {
      console.log(PORTFOLIOSMOCK)      
      return of (PORTFOLIOSMOCK);
    } else {
      return this.http.get<Portfolio[]>(this.config.MY_DATA_API_URL + 'portfolios?'+ p, {"headers": this.restDbHeaders});
    }
  }


  /**
  * Insert stock symbol
  *
  * @param object stock stock object
  * @param string portfolioId portfolio ID
  * @return object observable payload data
  */
  insertStock(stock, portfolioId: string): Observable<any> {
    let p = {
      "symbol": stock.symbol,
      "description": stock.description
    };

    if(this.config.mockData === true) {
      console.log(true)      
      return of (true);
    } else {
      return this.http.post<any>(this.config.MY_DATA_API_URL + 'portfolios/' + portfolioId + '/stocks', p, {"headers": this.restDbHeaders});
    }
  }

}
