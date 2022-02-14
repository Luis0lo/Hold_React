import { useState, useEffect } from 'react';
import QuoteViewer from './QuoteViewer';

const RandomQuote = ({ API_URL }) => {
  const [randQuote, setRandQuote] = useState('');

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
      <QuoteViewer randQuote={randQuote} />
    </div>
  );
};

export default RandomQuote;
