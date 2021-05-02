import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, 
				 moveItemInArray, 
				 transferArrayItem,
				 copyArrayItem } from '@angular/cdk/drag-drop';

import { TEXT } from '../config';
import { RestService } from '../rest.service'; 
import { GlobalService } from '../global.service'; 

import { StockSearchResult } from '../models/stockSearchResult.model';
import { StockSearchResults } from '../models/stockSearchResults.model';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	global = new GlobalService;
	portfolios: Portfolio[] = [];
	stockSearch = new FormControl('');
	searchResult: StockSearchResult;
	searchResults: StockSearchResults = {"quotes": {"quote": []}};
	text = TEXT;

  constructor( private rest: RestService) { }

  ngOnInit() {
  	this.loadPortfolios();
  }

  /**
  * Clear Stock search
  *
  */
  clearSearch() {
  	this.stockSearch.setValue('');
  	this.searchResults = {"quotes": {"quote": []}};
		
		this.global.closeExpand("search-result");  	
  }

  /**
  * Perform Stock search
  *
  */
  doSearch() {  	
  	this.searchResults = {"quotes": {"quote": []}};

		this.rest.getQuotes(this.stockSearch.value)
		.subscribe( payload => {

			// Check for multiple stock symbols in search result
			if(Array.isArray(payload.quotes.quote)) {
				this.searchResults = payload;	
			} else if (payload.quotes.quote) {
  			this.searchResults.quotes.quote.push(payload.quotes.quote);
			}

			// feedback
			if(payload.quotes.unmatched_symbols) {
				this.searchResults.quotes.unmatched_symbols = payload.quotes.unmatched_symbols;
			}

			this.global.openExpand("search-result");

		}, error => {
			console.error(error.message);
      //this.displayFeedback.showFeedback(error.message, true, 30);  			
		});
		
  }

  /**
  * Drop stock into porfolio.  Write to DB
  *
  * @param object e event object
  * @param string portfolioId Portfolio ID 
  */
  dropInPortfolio(event: CdkDragDrop<string[]>, portfolioId: string) {
console.log("HERE")
console.log(event.previousContainer.data[event.previousIndex]);
    this.rest.insertStock(event.previousContainer.data[event.previousIndex], portfolioId)
    .subscribe( () => {
	    this.loadPortfolios();
    })

    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);

    if(event.previousContainer.data.length == 0) {
    	this.clearSearch();
    }

  }

  /**
  * Get Portfolios
  *
  * @return array p portfolios
  */
  loadPortfolios() {

		this.rest.getPortfolios()
		.subscribe( payload => {
			this.portfolios = payload;
		}, error => {
			console.error(error.message);
      //this.displayFeedback.showFeedback(error.message, true, 30);  			
		});

  }

}
