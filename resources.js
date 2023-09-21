const { ExchangeSymbols } = tables;
import fetch from 'wg-fetch';

export class ExchangeSymbolsSource extends Resource {
  async get() {
    return {
      id: 1,
      Symbol: 'ETHBTC'
    }
    //const data = await fetch('https://api.binance.com/api/v3/exchangeInfo').json();
    //console.log(data);
    return data;
  }
}

ExchangeSymbols.sourcedFrom(ExchangeSymbolsSource, { expiration: 3600 });
