import {createContext, useState} from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';
import { updateHoldings } from '../../helper';
import CurrencyInput from './CurrencyInput';
import Balance from './Balance/Balance';

export const HoldingContext = createContext()

const Holdings = () => {
  const [data, setData] = useState(userShares);
  const [currency, setCurrrency]=useState('')
  const [investedBalance, setInvestedBalance] = useState(0)
  const [liveBalance, setLiveBalance] = useState(0)

  function addShares(share) {
    const index = data.findIndex((holding) => {
      return holding.name.toLowerCase() === share.name.toLowerCase();
    });
    
    if (index >= 0) {
      const dataUpdated = updateHoldings(data, index, share);
      setData(dataUpdated)
      return
    }
    setData([...data, {...share, total: (share.price * share.quantity), currentMarketValueTotal:0}]);
  }
  console.log('live', liveBalance, 'invested', investedBalance)

  return (
    <HoldingContext.Provider value={{currency}}>
      <Container maxW="container.xl" my="5">
        <CurrencyInput setCurrrency={setCurrrency}/>
        <Balance data={data} setInvestedBalance={setInvestedBalance} setLiveBalance={setLiveBalance} currency={currency}/>
        <SharesInput addShares={addShares} />
        <SharesViewer data={data} />
      </Container>
    </HoldingContext.Provider>
  );
};

export default Holdings;
