import React from 'react';
import DisplayQuotes from './DisplayQuotes';
import { useState, useEffect } from 'react';

const SearchQuotes = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  // const [isFetching, setIsFetching] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [quoteRanking, setQuoteRanking] = useState('');
  const [data, setData] = useState(null);
  // const [error, setError] = useState('');
  const [url, setUrl] = useState(null);

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
  useEffect(() => {
    async function fetchData() {
      console.log(url);
      let response = await fetch(`${url}`);
      const resData = await response.json();
      setData(resData);
    }
    fetchData();
  }, [url]);

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
      <DisplayQuotes data={data} />
    </div>
  );
};

export default SearchQuotes;
