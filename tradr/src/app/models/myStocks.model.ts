export class MyStocks
{
    "stocks": Array<{
        "symbol": string;
        "shares": Array<{
            "datePurchased": string; //datetime
            "numberOfShares": number;
            "sharePrice": number;
            "stopLoss": number;
            "notes": string;
        }>;
        "notes": string;
    }> 
}

export const MYSTOCKSMOCK: MyStocks = 
{
    "stocks": [{
        "symbol": "CCL",
        "shares": [{
            "datePurchased": "2020-01-02",
            "numberOfShares": 112,
            "sharePrice": 28.8823,
            "stopLoss": 25.2211,
            "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet magna risus. Aenean commodo tellus bibendum vestibulum ornare."
        }],
        "notes": "Aenean pharetra nisl id pulvinar tempor. Etiam condimentum nibh vel luctus aliquet."
    },{
        "symbol": "AAPL",
        "shares": [{
            "datePurchased": "2020-02-04",
            "numberOfShares": 12,
            "sharePrice": 125.8,
            "stopLoss": 121.2111,
            "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
        },{
            "datePurchased": "2020-04-06",
            "numberOfShares": 5,
            "sharePrice": 122.8,
            "stopLoss": 121.2111,
            "notes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit atellus bibendum vestibulum ornare."
        }],
        "notes": "Etiam condimentum nibh vel luctus aliquet."
    }]
}