import { useState, useEffect } from 'react';
import { Container, Spinner } from '@chakra-ui/react';
import FadeIn from 'react-fade-in';
import QuoteViewer from './QuoteViewer';

const RandomQuote = ({ API_URL }) => {
  const [randQuote, setRandQuote] = useState(null);

  useEffect(() => {
    async function getRandQuote() {
      const response = await fetch(`${API_URL}/quotes/random`);
      const data = await response.json();
      setRandQuote(data.payload[0]);
    }
    getRandQuote();
  }, [API_URL]);

  return (
    <div>
      {randQuote ? (
        <FadeIn>
          <QuoteViewer randQuote={randQuote} />
        </FadeIn>
      ) : (
        <Container centerContent>
          <Spinner
            my={5}
            thickness="10px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Container>
      )}
    </div>
  );
};

export default RandomQuote;
