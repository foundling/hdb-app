const { ExchangeSymbolsCache } = tables;

export class ExchangeSymbolsSource extends Resource {
  async get() {
    const result = await fetch('https://api.binance.us/api/v3/exchangeInfo');
    const data = await result.json();
    console.log(typeof data, 'fetching...');
    return { timezone: data.timezone };
  }
}

ExchangeSymbolsCache.sourcedFrom(ExchangeSymbolsSource, { expiration: 3600 });
