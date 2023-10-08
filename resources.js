const { ExchangeSymbol, ExchangeSymbols } = tables;

// Cached resource
export class ExchangeSymbolsSource extends Resource {

  async get() {

    const result = await fetch(`https://api.binance.us/api/v3/exchangeInfo`);

    return {
      data: result.symbols.map(s => ({
        symbol: s.symbol,
        status: s.status,
        baseAsset: s.baseAsset,
        quoteAsset: s.quoteAsset
      }))
    };

  }
}

export class ExchangeSymbolSource extends Resource {

  async get() {

    const result = await fetch(`https://api.binance.us/api/v3/exchangeInfo?symbol=${this.getId()}`);
    return await result.json();

  }

}

ExchangeSymbol.sourcedFrom(ExchangeSymbolSource, { expiration: 3600 });
ExchangeSymbols.sourcedFrom(ExchangeSymbolsSource, { expiration: 3600 });
