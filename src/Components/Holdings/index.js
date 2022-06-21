import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userShares from '../../libs';
import { updateHoldings } from '../../helper';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import CurrencyInput from './CurrencyInput';
import BalanceDisplay from './BalanceDisplay/BalanceDisplay';
import Balance from './Balance/Balance';
import { Container, Button } from '@chakra-ui/react';

export const HoldingContext = createContext();

const Holdings = () => {
  const [data, setData] = useState(userShares);
  const [currency, setCurrrency] = useState('');
  const [investedBalance, setInvestedBalance] = useState(0);
  const [liveBalance, setLiveBalance] = useState(0);
  const [investmentResult, setInvestmentResult] = useState(0);
  const [hasBalance, setHasBalance] = useState(false);

  function addShares(share) {
    const index = data.findIndex((holding) => {
      return holding.name.toLowerCase() === share.name.toLowerCase();
    });

    if (index >= 0) {
      const dataUpdated = updateHoldings(data, index, share);
      setData(dataUpdated);
      return;
    }
    setData([
      ...data,
      {
        ...share,
        total: share.price * share.quantity,
        currentMarketValueTotal: 0,
      },
    ]);
  }

  return (
    <HoldingContext.Provider value={{ currency }}>
      <Container maxW="container.xl" my="5" centerContent>
        <p style={{ textAlign: 'center' }}>
          Track your investments and check your current live balance.
        </p>
        <CurrencyInput setCurrrency={setCurrrency} />
        <Balance
          data={data}
          setInvestedBalance={setInvestedBalance}
          setLiveBalance={setLiveBalance}
          setInvestmentResult={setInvestmentResult}
          setHasBalance={setHasBalance}
          currency={currency}
        />
        <Button m={2}>
        <Link to="/holdings/gain-losses">💰 The Math of Gains and Losses 💰</Link>{' '}
        </Button>
        <BalanceDisplay
          liveBalance={liveBalance}
          investedBalance={investedBalance}
          investmentResult={investmentResult}
          hasBalance={hasBalance}
          setHasBalance={setHasBalance}
          currency={currency}
        />
        <SharesInput addShares={addShares} />
        <SharesViewer data={data} />
      </Container>
    </HoldingContext.Provider>
  );
};

export default Holdings;
