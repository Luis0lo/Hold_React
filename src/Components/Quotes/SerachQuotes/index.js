import React from 'react';
import DisplayQuotes from './DisplayQuotes';
import { useState } from 'react';
import useFetch from '../../../Hooks/useFetch';

const SearchQuotes = ({ API_URL }) => {
  const [authorName, setAuthorName] = useState('');
  const [quoteRanking, setQuoteRanking] = useState('');
  const [url, setUrl] = useState('');
  const { data, error, isLoading } = useFetch(url);

  function handleName(e) {
    setAuthorName(e.target.value);
  }
  function handleRanking(e) {
    setQuoteRanking(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    if (quoteRanking > 0) {
      setUrl(`${API_URL}/quotes/?ranking=${quoteRanking}`);
    } else if (authorName.length) {
      setUrl(`${API_URL}/quotes/?author=${authorName}`);
    } else {
      setUrl(`${API_URL}/quotes`);
    }
  }

  

  return (
    <div>
      <h1>Search Quotes</h1>
      <form onSubmit={handleClick}>
        <label>By Author</label>
        <input onChange={handleName} type="text" />
        <label>By Ranking</label>
        <input onChange={handleRanking} type="number" />
        <button type="submit">Search</button>
      </form>
      <DisplayQuotes data={data} isLoading={isLoading} error={error}/>
    </div>
  );
};

export default SearchQuotes;
