export class StockSearchResults
{
    "quotes":{
        "quote": Array<{
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
        }>,
        "unmatched_symbols"?: { "symbol": any }
    }
}


export const STOCKSEARCHRESULTSMOCK: StockSearchResults = 
{
    "quotes": {
        "quote": [
            {
                "symbol": "AAPL",
                "description": "Apple Inc",
                "exch": "Q",
                "type": "stock",
                "last": 123.0,
                "change": 0.85,
                "volume": 75089134,
                "open": 123.66,
                "high": 124.18,
                "low": 122.49,
                "close": 123.0,
                "bid": 123.0,
                "ask": 123.05,
                "change_percentage": 0.70,
                "average_volume": 110258111,
                "last_volume": 4649085,
                "trade_date": 1617307201197,
                "prevclose": 122.15,
                "week_52_high": 145.09,
                "week_52_low": 59.743525,
                "bidsize": 17,
                "bidexch": "P",
                "bid_date": 1617321593000,
                "asksize": 2,
                "askexch": "Q",
                "ask_date": 1617321593000,
                "root_symbols": "AAPL"
            },
            {
                "symbol": "GOOG",
                "description": "Alphabet Inc. - Class C Capital Stock",
                "exch": "Q",
                "type": "stock",
                "last": 2137.75,
                "change": 69.12,
                "volume": 1698978,
                "open": 2097.95,
                "high": 2142.94,
                "low": 2096.89,
                "close": 2137.75,
                "bid": 2137.78,
                "ask": 2150.0,
                "change_percentage": 3.35,
                "average_volume": 1595264,
                "last_volume": 82933,
                "trade_date": 1617307200847,
                "prevclose": 2068.63,
                "week_52_high": 2152.68,
                "week_52_low": 1079.81,
                "bidsize": 2,
                "bidexch": "P",
                "bid_date": 1617321478000,
                "asksize": 1,
                "askexch": "Q",
                "ask_date": 1617321597000,
                "root_symbols": "GOOG"
            }
        ],
        "unmatched_symbols": { "symbol": "WYNN" }
    }
}