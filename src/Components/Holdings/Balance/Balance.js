import { Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllTickers } from '../../../helper';
import BalanceViewer from '../BalanceViewer';

const Balance = ({ data, setInvestmentResult, setInvestedBalance, setLiveBalance, currency, setHasBalance }) => {
  const [prices, setPrices] = useState([
    // { ticker: 'TSLA', price: 1002.76 },
    // { ticker: 'GOOGL', price: 2551.68 },
  ]);

  const tickers = getAllTickers(data);
  const key = process.env.REACT_APP_STOCK_API_KEY;

  useEffect(() => {
    async function getRealtimeSharePrices() {
      const response = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=${tickers}&api_token=${key}`);
      const data = await response.json();
      const realtimePrices = data['data'].map((ticker) => {
        return {
          ticker: ticker.ticker,
          price: ticker.price,
        };
      });
      setPrices(realtimePrices)
    }
    getRealtimeSharePrices();
  }, [tickers, key]);

  const currencies = ['GBP', 'USD', 'EUR'];

  function buildExchangeUrl(baseCurrency) {
    const baseUrl = 'https://api.stockdata.org/v1/data/currency/latest?';
    const arr = currencies.filter((c) => c !== baseCurrency);
    const symbols = baseCurrency + arr[0] + ',' + baseCurrency + arr[1];
    const exchangeUrl = `${baseUrl}symbols=${symbols}&api_token=${key}`;
    return exchangeUrl;
  }

  async function getExchangeRates(baseCurrency) {
    const response = await fetch(`${buildExchangeUrl(baseCurrency)}`);
    const data = await response.json();
    const exchangeRates = data['data'].map((x) => {
      return {
        symbol: x[0]['symbol'].slice(-3),
        price: x[0]['price'],
      };
    });
    exchangeRates.push({ symbol: baseCurrency, price: 1 });
    return exchangeRates;
    // return [
    //   { symbol: 'GBP', price: 0.83 },
    //   { symbol: 'USD', price: 1.08 },
    //   { symbol: 'EUR', price: 1 },
    // ];
  }

  async function getConvertedTotals() {
    const exchangeRates = await getExchangeRates(currency);
    let runningInvestedTotal = 0;
    let runningCurrentMarketTotal = 0;
    data.forEach((share) => {
      let exchangeRate = exchangeRates.find(
        (rate) => rate.symbol === share['currency']
      );
      runningInvestedTotal += share['total'] / exchangeRate.price;
      runningCurrentMarketTotal +=
        share['currentMarketValueTotal'] / exchangeRate.price;
    });
    
    setLiveBalance(runningCurrentMarketTotal.toFixed(2));
    setInvestedBalance(runningInvestedTotal.toFixed(2));
    setInvestmentResult((runningCurrentMarketTotal - runningInvestedTotal).toFixed(2))
    setHasBalance(true)
  }

  function getLiveBalance() {
    data.forEach((userShare) => {
      let matchingShare = prices.find(
        (sharePrice) => sharePrice.ticker === userShare.name
      );
      if (matchingShare && matchingShare.price)
        userShare.currentMarketValueTotal =
          matchingShare.price * userShare.quantity;
    });
    // const totalLive = data.reduce((acc, crr) => {
    //   return acc.currentMarketValueTotal + crr.currentMarketValueTotal;
    // });
    // const totalInvested = data.reduce((acc, crr) => {
    //   return acc.total + crr.total;
    // });

    // setInvestedBalance(totalInvested)
    // setLiveBalance(totalLive)
  }

  function handleBalance() {
    if (currency) {
      getLiveBalance();
      getConvertedTotals();
    } else {
      console.log('select a currency');
    }
  }
  return (
    <Container centerContent>
      <BalanceViewer data={data} handleBalance={handleBalance} />
    </Container>
  );
};

export default Balance;
