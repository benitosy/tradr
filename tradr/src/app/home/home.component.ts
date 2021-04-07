import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TEXT } from '../config';
import { RestService } from '../rest.service'; 

import { StockSearchResult } from '../models/stockSearchResult.model';
import { StockSearchResults } from '../models/stockSearchResults.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	text = TEXT;
	stockSearch = new FormControl('');
	searchResult: StockSearchResult;
	searchResults: StockSearchResults = {"quotes": {"quote": []}};

  constructor( private rest: RestService) { }

  ngOnInit() {
  }

  /**-
  * Clear Stock search
  *
  */
  clearSearch() {
  	this.stockSearch.setValue('');
  	this.searchResults = {"quotes": {"quote": []}};
  }

  /**
  * Perform Stock search
  *
  */
  doSearch() {
  	this.searchResults = {"quotes": {"quote": []}};

  	if(this.stockSearch.value.includes(',')) {
  		this.rest.getQuotes(this.stockSearch.value)
  		.subscribe( payloads => {
  			this.searchResults = payloads;
  		}, error => {
  			console.error(error.message);
        //this.displayFeedback.showFeedback(error.message, true, 30);  			
  		});
  	} else {
  		this.rest.getQuote(this.stockSearch.value)
  		.subscribe( payload => {
  			this.searchResults.quotes.quote.push(payload.quotes.quote);
  		}, error => {
  			console.error(error.message);
        //this.displayFeedback.showFeedback(error.message, true, 30);  			
  		});
  	}
  }
}
