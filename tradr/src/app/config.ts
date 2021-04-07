export const TEXT = {//alphabetical order
  "stockSearchPlaceholder": "AAPL,GOOG,GME",
  "title": "Tradr.",
}

export const CONFIGS = {
  prod: {
    'APP_MODE': 'PRODUCTION',
    'API_URL': 'https://sandbox.tradier.com/v1/',
    'mockData': false,
  },  
  dev: {
    'APP_MODE': 'DEV',
    'API_URL': 'https://sandbox.tradier.com/v1/',
    'mockData': false,
  },  
  localhost: {
    'APP_MODE': 'localhost',
    'API_URL': 'https://sandbox.tradier.com/v1/',
    'mockData': true,
  }
}

