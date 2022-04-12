import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';

const Holdings = () => {
  const [data, setData] = useState(userShares);

  function addShares(newData) {
    console.log('newData', newData);
    const index = data.findIndex((share) => {
      return share.name.toLowerCase() === newData.name.toLowerCase();
    });
    
    if (index >= 0) {
      return updateShares(index, newData);
    }
    setData([...data, newData]);
  }

  function updateShares(index, { quantity, price }) {
    const numberOfShares = data[index].quantity + quantity;
    const currentTotal = quantity * price;
    const sharePrice = (data[index].total + currentTotal) / numberOfShares;
    const totalInvested = numberOfShares * sharePrice
    setData([...data.slice(0, index), {...data[index], price: sharePrice, total: totalInvested, quantity: numberOfShares}, ...data.slice(index + 1)])
    console.log('here',data)
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
