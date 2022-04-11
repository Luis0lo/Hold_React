import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';

const Holdings = () => {
  const [data, setData] = useState(userShares);
  // const [updateShare, setUpdateShare] = useState(null);



  function addShares(newData) {
    // console.log('newData', newData);
    const index = data.findIndex((share) => {
      return share.name === newData.name;
    });
    
    if (index >= 0) {
      return updateShares(index, newData);
    }

    console.log(index)
    setData([...data, newData]);
  }

  function updateShares(index, { quantity, price }) {
    const shareNumber = (data[index].quantity += Number(quantity));
    const currentTotal = quantity * price;
    const sharePrice = (data[index].total + currentTotal) / shareNumber;
    data[index].price = sharePrice;
    data[index].total = shareNumber * sharePrice;
    setData()
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
