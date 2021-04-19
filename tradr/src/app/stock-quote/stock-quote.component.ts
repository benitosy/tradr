import { Component, OnInit, Input } from '@angular/core';
import { StockSearchResults } from '../models/stockSearchResults.model';

@Component({
  selector: 'app-stock-quote',
  templateUrl: './stock-quote.component.html',
  styleUrls: ['./stock-quote.component.scss']
})

export class StockQuoteComponent implements OnInit {
	
	@Input() quote: any = new StockSearchResults;
	@Input() move: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
