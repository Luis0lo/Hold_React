import { Container, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllTickers } from '../../../helper';

const BalanceViewer = ({ data, setInvestedBalance, setLiveBalance, currency }) => {
  const [prices, setPrices] = useState([
    { ticker: 'TSLA', price: 1002.76 },
    { ticker: 'GOOGL', price: 2551.68 },
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
  }

  async function getConvertedTotals() {
    const exchangeRates = await getExchangeRates(currency);
    console.log('exhange---', exchangeRates);
    let runningInvestedTotal = 0;
    let runningCurrentMarketTotal = 0;
    data.forEach((share) => {
      console.log(share);
      let exchangeRate = exchangeRates.find(
        (rate) => rate.symbol === share['currency']
      );
      console.log(exchangeRate);
      runningInvestedTotal += share['total'] / exchangeRate.price;
      runningCurrentMarketTotal +=
        share['currentMarketValueTotal'] / exchangeRate.price;
    });
    console.log({
      runningInvestedTotal,
      runningCurrentMarketTotal,
    })
    setLiveBalance(runningCurrentMarketTotal)
    setInvestedBalance(runningInvestedTotal)
    // return {
    //   runningInvestedTotal,
    //   runningCurrentMarketTotal,
    // };
  }


  function getLiveBalance() {
    data.forEach((userShare) => {
      var matchingShare = prices.find(
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
    if (currency){
      getLiveBalance();
      getConvertedTotals()
    } else{
      console.log('select a currency')
    }
  }

  return (
    <Container my={5}>
      <p>Balance Viewer</p>

      <Button onClick={handleBalance}>Live Balance</Button>
    </Container>
  );
};

export default BalanceViewer;
