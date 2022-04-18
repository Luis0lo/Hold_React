import { Container, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getAllTickers } from '../../../helper';

const BalanceViewer = ({ data, setInvestedBalance, setLiveBalance }) => {
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

  function getLiveBalance() {
    data.forEach((userShare) => {
      var matchingShare = prices.find(
        (sharePrice) => sharePrice.ticker === userShare.name
      );
      if (matchingShare && matchingShare.price)
        userShare.currentMarketValueTotal =
          matchingShare.price * userShare.quantity;
    });
    const totalLive = data.reduce((acc, crr) => {
      return acc.currentMarketValueTotal + crr.currentMarketValueTotal;
    });
    const totalInvested = data.reduce((acc, crr) => {
      return acc.total + crr.total;
    });
    setInvestedBalance(totalInvested)
    setLiveBalance(totalLive)
  }

  function handleBalance() {
    getLiveBalance();
  }

  return (
    <Container my={5}>
      <p>Balance Viewer</p>
      <Button onClick={handleBalance}>Live Balance</Button>
    </Container>
  );
};

export default BalanceViewer;
