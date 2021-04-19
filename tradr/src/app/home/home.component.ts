import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, 
				 moveItemInArray, 
				 transferArrayItem,
				 copyArrayItem } from '@angular/cdk/drag-drop';

import { TEXT } from '../config';
import { RestService } from '../rest.service'; 

import { StockSearchResult } from '../models/stockSearchResult.model';
import { StockSearchResults } from '../models/stockSearchResults.model';
import { MyStocks } from '../models/myStocks.model';
import { User } from '../models/user.model';

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
	users: User[] = [];

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
  * Get Users
  *
  */
  getUsers() {
		this.rest.getUsers()
		.subscribe( payloads => {
			this.users = payloads;
		}, error => {
			console.error(error.message);
      //this.displayFeedback.showFeedback(error.message, true, 30);  			
		});
  }

}
