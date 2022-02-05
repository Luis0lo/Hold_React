import React from 'react';
import EditQuote from './EditButton';
import DeleteQuote from './DeleteButton';

const DisplayQuotes = ({ data, isLoading, error, API_URL, setId, setEdit }) => {
  return data ? (
    <div>
      <h1>Display Quotes</h1>
      {data.payload.map((quote) => {
        return (
          <div key={quote.id}>
            <p>by: {quote.author}</p>
            <p> {quote.quote}</p>
            <p>{quote.explanation}</p>
            <p>{quote.ranking}</p>
            <EditQuote setId={setId} quoteId={quote.id} setEdit={setEdit} />
            <DeleteQuote quoteId={quote.id} setId={setId} />
            <hr />
          </div>
        );
      })}
    </div>
  ) : (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
    </>
  );
};

export default DisplayQuotes;
