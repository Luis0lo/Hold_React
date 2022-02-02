import React from 'react';
import EditQuote from './EditQuote';
import DeleteQuote from './DeleteQuote';

const DisplayQuotes = ({ data }) => {
  return (
    data && (
      <div>
        <h1>Display Quotes</h1>
        {data.payload.map((quote) => {
          return (
            <div key={quote.id}>
              <p>by: {quote.author}</p>
              <p> {quote.quote}</p>
              <p>{quote.explanation}</p>
              <p>{quote.ranking}</p>
              <EditQuote />
              <DeleteQuote />
              <hr />
            </div>
          );
        })}
      </div>
    )
  );
};

export default DisplayQuotes;
