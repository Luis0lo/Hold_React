import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';
import { updateHoldings } from '../../helper';
import BalanceViewer from './BalanceViewer';
import CurrencyInput from './CurrencyInput';

const Holdings = () => {
  const [data, setData] = useState(userShares);
  const [currency, setCurrrency]=useState(null)
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
  console.log(liveBalance, investedBalance)

  

  return (
    <Container maxW="container.xl" my="5">
      <CurrencyInput setCurrrency={setCurrrency}/>
      <SharesInput addShares={addShares} />
      <SharesViewer data={data} />
      <BalanceViewer data={data} setInvestedBalance={setInvestedBalance} setLiveBalance={setLiveBalance}/>
    </Container>
  );
};

export default Holdings;
