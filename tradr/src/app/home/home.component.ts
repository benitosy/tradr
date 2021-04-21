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
import { MyStocks } from '../models/myStocks.model';
import { Portfolio } from '../models/portfolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	myStocks: MyStocks = {"stocks": []};
	stockSearch = new FormControl('');
	searchResult: StockSearchResult;
	searchResults: StockSearchResults = {"quotes": {"quote": []}};
	text = TEXT;
	portfolios: Portfolio[] = [];

  constructor( private rest: RestService,
  						 private global: GlobalService) { }

  ngOnInit() {
  	this.portfolios = this.getPortfolios();
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

  	if(this.stockSearch.value.includes(',')) {

  		this.rest.getQuotes(this.stockSearch.value)
  		.subscribe( payload => {

  			if(this.searchResults.quotes.quote.length === 0)
					this.global.openExpand("search-result");

  			this.searchResults = payload;

  		}, error => {
  			console.error(error.message);
        //this.displayFeedback.showFeedback(error.message, true, 30);  			
  		});

  	} else {
  		
  		this.rest.getQuote(this.stockSearch.value)
  		.subscribe( payload => {

  			if(this.searchResults.quotes.quote.length === 0)
					this.global.openExpand("search-result");

  			this.searchResults.quotes.quote.push(payload.quotes.quote);

  		}, error => {
  			console.error(error.message);
        //this.displayFeedback.showFeedback(error.message, true, 30);  			
  		});

  	}
		
  }

  /**
  * Drop stock into porfolio.  Write to DB
  *
  * @param object e event object
  */
  dropInPortfolio(event: CdkDragDrop<string[]>) {
console.log(event.previousContainer.data)  	
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }

  /**
  * Get Portfolios
  *
  * @return array p portfolios
  */
  getPortfolios() {
  	let p = [];

		this.rest.getPortfolios()
		.subscribe( payload => {
			if(payload.length > 0) {
				payload.forEach(portfolio => {
console.log(portfolio)
				});
			}
		}, error => {
			console.error(error.message);
      //this.displayFeedback.showFeedback(error.message, true, 30);  			
		});

		return p;
  }

}
