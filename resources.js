const { ExchangeSymbolsCache } = tables;

export class ExchangeSymbolsSource extends Resource {
  async get() {
    const result = await fetch('https://api.binance.us/api/v3/exchangeInfo');
    const data = await result.json();
    console.log('fetching');
    return data.timezone;
  }
}

ExchangeSymbolsCache.sourcedFrom(ExchangeSymbolsSource, { expiration: 3600 });
