import React, { useState } from 'react';
import userShares from '../../Data';
import SharesInput from './SharesInput';
const Holdings = () => {
  const [data, setData] = useState(userShares);

  function addShares(newData) {
    console.log('newData', newData);
    setData([...data, newData]);
  }
  console.log('data edited', data);

  return (
    <div>
      <SharesInput addShares={addShares} />
    </div>
  );
};

export default Holdings;
