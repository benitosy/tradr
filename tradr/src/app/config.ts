export const TEXT = {//alphabetical order
  "stockSearchPlaceholder": "AAPL,GOOG,GME",
  "title": "Tradr.",
}

export const CONSTANTS_INJECT = {
  prod: {
    'APP_MODE': 'PRODUCTION',
    'API_URL': 'https:/tradr.ben-sy.com/',
    'mockData': true,
  },
  stg: {
    'APP_MODE': 'STG',
    'API_URL': 'https:/tradr.ben-sy.com/',
    'mockData': true,
  },  
  dev: {
    'APP_MODE': 'DEV',
    'API_URL': 'https:/tradr.ben-sy.com/',
    'mockData': true,
  },  
  localhost: {
    'APP_MODE': 'localhost',
    'API_URL': '',
    'mockData': true,
  }
}

