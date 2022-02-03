import React from 'react';
import SearchQuotes from './SerachQuotes';
import AddQuotes from './AddQuotes';

const Quotes = () => {
  const API_URL = process.env.REACT_APP_API_URL;




  return (
    <div>
      <h1>Quotes</h1>
      <button>Add</button>
      <button>Search</button>
      <SearchQuotes API_URL={API_URL}/>
      {/* <AddQuotes API_URL={API_URL}/> */}
    </div>
  );
};

export default Quotes;
