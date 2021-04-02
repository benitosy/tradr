import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TEXT } from '../config';
import { StockSearchResult } from '../models/stockSearchResult.model';
import { StockSearchResultMulti } from '../models/stockSearchResultMulti.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	text = TEXT;
	stockSearch = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
  	console.log(this.stockSearch.value);
  	console.log(this.stockSearch);
  }

}
