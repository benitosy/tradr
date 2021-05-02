export class StockSearchResult
{
    "quotes": {
        "quote": {
            "symbol": string,
            "description": string,
            "exch": string,
            "type": string,
            "last": number,
            "change": number,
            "volume": number,
            "open": number,
            "high": number,
            "low": number,
            "close": number,
            "bid": number,
            "ask": number,
            "change_percentage": number,
            "average_volume": number,
            "last_volume": number,
            "trade_date": number,
            "prevclose": number,
            "week_52_high": number,
            "week_52_low": number,
            "bidsize": number,
            "bidexch": string,
            "bid_date": number,
            "asksize": number,
            "askexch": string,
            "ask_date": number,
            "root_symbols": string
        },
        "unmatched_symbols"?: { "symbol": any }
    }
}

export const STOCKSEARCHRESULTMOCK: StockSearchResult = 
{
    "quotes": {
        "quote": {
            "symbol": "AAPL",
            "description": "Apple Inc",
            "exch": "Q",
            "type": "stock",
            "last": 122.15,
            "change": 2.25,
            "volume": 118119529,
            "open": 121.65,
            "high": 123.52,
            "low": 121.15,
            "close": 122.15,
            "bid": 122.07,
            "ask": 122.1,
            "change_percentage": 1.88,
            "average_volume": 110119963,
            "last_volume": 14052024,
            "trade_date": 1617220800390,
            "prevclose": 119.9,
            "week_52_high": 145.09,
            "week_52_low": 59.225,
            "bidsize": 1,
            "bidexch": "P",
            "bid_date": 1617227162000,
            "asksize": 25,
            "askexch": "P",
            "ask_date": 1617227181000,
            "root_symbols": "AAPL"
        },
        "unmatched_symbols": { "symbol": "WYNN" }
    }
}
