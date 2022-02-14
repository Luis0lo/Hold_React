import React, { useState } from 'react';
import userShares from '../../libs';
import SharesInput from './SharesInput';
import SharesViewer from './SharesViewer';
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
      <SharesViewer data={data}/>
    </div>
  );
};

export default Holdings;
