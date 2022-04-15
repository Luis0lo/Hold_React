import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';
import { updateHoldings } from '../../helper';

const Holdings = () => {
  const [data, setData] = useState(userShares);

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

  console.log('data edited', data);

  return (
    <Container maxW="container.xl" my="5">
      <SharesInput addShares={addShares} />
      <SharesViewer data={data} />
    </Container>
  );
};

export default Holdings;
