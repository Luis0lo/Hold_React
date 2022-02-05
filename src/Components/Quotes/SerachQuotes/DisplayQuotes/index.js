import React from 'react';
import EditQuote from '../EditButton';
import DeleteQuote from '../DeleteButton';
import { Container } from '@chakra-ui/react';

const DisplayQuotes = ({
  data,
  isLoading,
  error,
  API_URL,
  setId,
  setEdit,
  setDelete,
}) => {
  return data ? (
    <Container>
      <Container
        my={5}
      >{`We got ${data.payload.length} quotes so far`}</Container>
      {data.payload.map((quote) => {
        return (
          <Container mt={4} maxW="container.lg" key={quote.id}>
            <p>{quote.author}</p>
            <em>
              <b>
                <p>"{quote.quote}"</p>
              </b>{' '}
            </em>
            <p>{quote.explanation}</p>
            <Container my={4} style={{ display: 'flex' }}>
              <EditQuote setId={setId} quoteId={quote.id} setEdit={setEdit} />
              <p>{'⭐'.repeat(quote.ranking)}</p>
              <DeleteQuote
                quoteId={quote.id}
                setId={setId}
                setDelete={setDelete}
              />
            </Container>
            <hr />
          </Container>
        );
      })}
    </Container>
  ) : (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
    </>
  );
};

export default DisplayQuotes;
