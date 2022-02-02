import React from 'react';
import EditQuote from './EditQuote';
import DeleteQuote from './DeleteQuote';

const DisplayQuotes = () => {
  return (
    <div>
      <h1>Display Quotes</h1>
      <EditQuote />
      <DeleteQuote />
    </div>
  );
};

export default DisplayQuotes;
