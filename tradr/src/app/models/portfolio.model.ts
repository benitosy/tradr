export class Portfolio
{
  "_id": string;
  "_created": string;
  "name": string;
  "stocks": Array<MyStocks>;
}

export class MyStocks
{
	"_id": string;
	"_created": string;
  "symbol": string;
  "shares": Array<MyShares>;
  "notes": string;
}

export class MyShares
{
	"_id": string;
	"_created": string;
  "numberOfShares": number;
  "sharePrice": number;
  "stopLoss": number;
  "notes": string;
}

export const PORTFOLIOSMOCK: Portfolio[] =
[
  {
    "_id": "607a12a23e28515100023e01",
   	"_created": "2020-01-02",
    "name": "Watching",
    "stocks": [{
    	"_id": "abc123",
    	"_created": "2020-01-02",
      "symbol": "CCL",
      "shares": [{
      		"_id": "abc123",
          "_created": "2020-01-02",
          "numberOfShares": 112,
          "sharePrice": 28.8823,
          "stopLoss": 25.2211,
          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet magna risus. Aenean commodo tellus bibendum vestibulum ornare."
      }],
      "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
	  }],
  },{
      "_id": "607a12a23e28515100023e02",
	   	"_created": "2020-01-02",
      "name": "Active",
      "stocks": [{
	    	"_id": "abc123",
	    	"_created": "2020-01-02",
	      "symbol": "AAPL",
	      "shares": [{
	      		"_id": "abc1234",
	          "_created": "2020-02-04",
	          "numberOfShares": 12,
	          "sharePrice": 125.8,
	          "stopLoss": 121.2111,
	          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
	      },{
	      		"_id": "abc1235",
	          "_created": "2020-04-06",
	          "numberOfShares": 5,
	          "sharePrice": 122.8,
	          "stopLoss": 121.2111,
	          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
	      }],
      "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
	  }],
  }
] 
