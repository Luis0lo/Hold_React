const userShares = [
  {
    name: 'TSLA',
    quantity: 2,
    price: 700,
    // For future extension - track user transactions to give accurate figures
    // Right now, we are converting a historic price every time we use the app.
    // orders: [
    //   {
    //     date: '2020-01-01:14:00:00',
    //     price: 1000,
    //     quantity: 3,
    //     currency: USD,
    //     currencyPaid: GBP,
    //     exchangeRate: 1.12,
    //     totalPaidInLocalCurrency: '', // (quantity * price) */ exchangeRate
    //   },
    //   {},
    // ],
    total: 1400,
    currentMarketValueTotal: 0,
    currency: 'USD',
  },
  // {
  //   name: 'AAPL',
  //   quantity: 10,
  //   price: 150,
  //   total: 1500,
  //   currentMarketValueTotal: 0,
  //   currency: 'USD',
  // },
  {
    name: 'GOOGL',
    quantity: 2,
    price: 2500,
    total: 5000,
    currentMarketValueTotal: 0,
    currency: 'USD',
  },
];
export default userShares;
