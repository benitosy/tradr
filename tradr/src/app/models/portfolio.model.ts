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
  "buyPrice": number;
  "sellPrice": number;
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
        "buyPrice": 28.8823,
        "sellPrice": 0,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet magna risus. Aenean commodo tellus bibendum vestibulum ornare."
      }],
      "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
	  },{
    	"_id": "abc123",
    	"_created": "2020-01-06",
      "symbol": "JETS",
      "shares": [{
    		"_id": "abc12366",
        "_created": "2020-01-07",
        "numberOfShares": 12,
        "buyPrice": 28.8823,
        "sellPrice": 0,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet magna risus. Aenean commodo tellus bibendum vestibulum ornare."
      },{
    		"_id": "abc12366",
        "_created": "2020-01-07",
        "numberOfShares": 19,
        "buyPrice": 27.8423,
        "sellPrice": 0,
        "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet magna risus. Aenean commodo tellus bibendum vestibulum ornare."
      }],
      "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
    }]
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
          "buyPrice": 125.8,
          "sellPrice": 0,
          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
	      },{
      		"_id": "abc1235",
          "_created": "2020-04-06",
          "numberOfShares": 5,
          "buyPrice": 0,
          "sellPrice": 122.8,
          "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
	      }],
      "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
	  }],
  }
] 
