import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
import { Container } from '@chakra-ui/react';

const Holdings = () => {
  const [data, setData] = useState(userShares);

  function addShares(newData) {
    console.log('newData', newData);
    setData([...data, newData]);
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
